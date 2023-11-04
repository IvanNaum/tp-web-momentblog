from django.contrib.auth.models import User
from django.db import models


class Moment(models.Model):
    class Meta:
        verbose_name = "Момент"
        verbose_name_plural = "Моменты"

    title = models.CharField(max_length=128, verbose_name="Заголовок")
    description = models.TextField(verbose_name="Содержание")
    autor = models.ForeignKey(User, verbose_name="Автор",
                              on_delete=models.CASCADE)
    image = models.ImageField(verbose_name="Изображение")
    created_date = models.DateTimeField(verbose_name="Дата создания",
                                        auto_now_add=True)


class Comment(models.Model):
    class Meta:
        verbose_name = 'Комментарий'
        verbose_name_plural = "Комментарии"

    text = models.TextField(verbose_name="Содержание")

    autor = models.ForeignKey(User, verbose_name="Автор",
                              on_delete=models.CASCADE)

    created_date = models.DateTimeField(verbose_name="Дата создания",
                                        auto_now_add=True)


class Subscription(models.Model):
    class Meta:
        verbose_name = 'Подписка'
        verbose_name_plural = "Подписки"

    autor = models.ForeignKey(User, related_name="subscribers",
                              on_delete=models.CASCADE,
                              verbose_name="Автор")
    subscriber = models.ForeignKey(User, related_name="subscriptions",
                                   on_delete=models.CASCADE,
                                   verbose_name="Подписчик")

    created_date = models.DateTimeField(verbose_name="Дата подписки",
                                        auto_now_add=True)


class Like:
    class Meta:
        verbose_name = "Лайк"
        verbose_name_plural = "Лайки"

    autor = models.ForeignKey(User, verbose_name="Автор",
                              on_delete=models.CASCADE)

    # comment/moment

    created_date = models.DateTimeField(verbose_name="Дата подписки",
                                        auto_now_add=True)


class CommentLike(models.Model, Like):
    comment = models.ForeignKey("Comment", verbose_name="Комментарий",
                                on_delete=models.CASCADE)


class MomentLike(models.Model, Like):
    moment = models.ForeignKey("Moment", verbose_name="Момент",
                               on_delete=models.CASCADE)


class Tag(models.Model):
    class Meta:
        verbose_name = "Тег"
        verbose_name_plural = "Теги"

    title = models.CharField(max_length=128, verbose_name="Текст")

    moment = models.ManyToManyField("Moment", verbose_name="Момент")
