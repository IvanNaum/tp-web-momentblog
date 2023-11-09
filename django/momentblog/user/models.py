import uuid

from django.contrib.auth.models import AbstractUser
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.db import models
from django.utils.translation import gettext_lazy as _


def user_photo_dir_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return f'users/{instance.get_username()}/{filename}'


class MomentBlogUser(AbstractUser):
    username_validator = UnicodeUsernameValidator()

    username = models.CharField(
        _("username"),
        max_length=150,
        unique=True,
        blank=False,
        null=False,
        help_text=_(
            "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."
        ),
        validators=[username_validator],
        error_messages={
            "unique": _("A user with that username already exists."),
        },
    )

    email = models.EmailField(_("email address"), unique=True,
                              blank=False, null=False, )
    # password
    photo = models.ImageField(verbose_name="Фотография",
                              upload_to=user_photo_dir_path,
                              blank=True, null=False)

    first_name = None
    last_name = None

    def __str__(self):
        return self.username
