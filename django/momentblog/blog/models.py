import re
import uuid

from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.db import models


def moment_photo_dir_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return f'moments/{instance.autor.get_username()}/{filename}'


class MomentManager(models.Manager):
    def create(self, *args, **kwargs):
        moment = super().create(*args, **kwargs)

        hashtags = re.findall(r'#[A-Za-zА-Яа-я0-9_]+', moment.description)
        for ht in hashtags:
            ht = ht.lstrip('#')
            tag = Tag.objects.get_or_create(title=ht)[0]
            tag.moments.add(moment)
        return moment


class Moment(models.Model):
    class Meta:
        verbose_name = "Момент"
        verbose_name_plural = "Моменты"
        ordering = ["-created_date"]

    objects = MomentManager()

    title = models.CharField(max_length=128, verbose_name="Заголовок")
    description = models.TextField(verbose_name="Содержание")
    autor = models.ForeignKey(get_user_model(), verbose_name="Автор",
                              on_delete=models.CASCADE)
    image = models.ImageField(verbose_name="Изображение",
                              upload_to=moment_photo_dir_path, )
    created_date = models.DateTimeField(verbose_name="Дата создания",
                                        auto_now_add=True)

    def __str__(self):
        return f"Moment ({self.id})"


class Comment(models.Model):
    class Meta:
        verbose_name = 'Комментарий'
        verbose_name_plural = "Комментарии"
        ordering = ["created_date"]

    text = models.TextField(verbose_name="Содержание")

    autor = models.ForeignKey(get_user_model(), verbose_name="Автор",
                              on_delete=models.CASCADE)

    moment = models.ForeignKey("Moment", verbose_name="Момент",
                               on_delete=models.CASCADE)

    created_date = models.DateTimeField(verbose_name="Дата создания",
                                        auto_now_add=True)


class Subscription(models.Model):
    class Meta:
        verbose_name = 'Подписка'
        verbose_name_plural = "Подписки"

        unique_together = ('autor', 'subscriber',)

    autor = models.ForeignKey(get_user_model(), related_name="subscribers",
                              on_delete=models.CASCADE,
                              verbose_name="Автор")
    subscriber = models.ForeignKey(get_user_model(),
                                   related_name="subscriptions",
                                   on_delete=models.CASCADE,
                                   verbose_name="Подписчик")

    created_date = models.DateTimeField(verbose_name="Дата подписки",
                                        auto_now_add=True)

    def __str__(self):
        return f"{self.subscriber} -> {self.autor}"


class Like(models.Model):
    class Meta:
        abstract = True

    autor = models.ForeignKey(get_user_model(), verbose_name="Автор",
                              on_delete=models.CASCADE)

    # comment/moment

    created_date = models.DateTimeField(verbose_name="Дата подписки",
                                        auto_now_add=True)


class CommentLike(Like):
    class Meta:
        verbose_name = "Лайк комментария"
        verbose_name_plural = "Лайки комминтариев"
        unique_together = ('comment', 'autor',)

    comment = models.ForeignKey("Comment", verbose_name="Комментарий",
                                on_delete=models.CASCADE)

    def __str__(self):
        return f"Like Moment ({self.comment.id})"


class MomentLike(Like):
    class Meta:
        verbose_name = "Лайк момента"
        verbose_name_plural = "Лайки моментов"
        unique_together = ('moment', 'autor',)

    moment = models.ForeignKey("Moment", verbose_name="Момент",
                               on_delete=models.CASCADE)

    def __str__(self):
        return f"Like Moment ({self.moment.id})"


class Tag(models.Model):
    class Meta:
        verbose_name = "Тег"
        verbose_name_plural = "Теги"

    title = models.CharField(max_length=128, verbose_name="Текст", unique=True)

    moments = models.ManyToManyField("Moment", verbose_name="Момент")

    def __str__(self):
        return f"#{self.title}"
