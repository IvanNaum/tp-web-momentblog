import os
import random
import string
import threading
from time import sleep

import requests
from django.contrib.auth import get_user_model
from django.core.files.images import ImageFile
from django.core.management.base import BaseCommand
from faker import Faker

from blog.models import (
    Moment, Comment, Subscription, CommentLike, MomentLike
)
from momentblog import settings

THREADS = 10

def get_random_filename(length=10):
    chars = string.ascii_letters + string.digits
    random.seed = (os.urandom(1024))
    return ''.join(random.choice(chars) for _ in range(length))


def download_new_photo(path):
    while True:
        try:
            req = requests.get("https://random.imagecdn.app/200/200",
                               stream=True)
            break
        except requests.exceptions.ConnectionError:
            sleep(1)
            continue

    ext = 'png'
    filename = "%s.%s" % (get_random_filename(), ext)
    if not os.path.exists(path):
        os.mkdir(path)
    path = path / f'{filename}'
    with open(path, 'wb') as ph_file:
        for chunk in req:
            ph_file.write(chunk)

    return path


class Command(BaseCommand):
    help = 'Filling db'
    fake = Faker("ru_RU")
    users = get_user_model().objects.all()
    moments = Moment.objects.all()
    comments = Comment.objects.all()

    def handle(self, *args, **options):
        # login:    admin
        # password: 123
        get_user_model().objects.get_or_create(username="admin",
                                               email="info04@admin.ru",
                                               password="pbkdf2_sha256$600000$WyvsV01xWJFvRtWGsTAZ8V$xz9wx8qSuF7JCmHT/sgXXvMokBkZXrk8btU41WS0bcQ=",
                                               is_staff=True,
                                               is_superuser=True)
        self.multiple_threads_fill_db(options['ratio'])

    def add_arguments(self, parser):
        parser.add_argument(
            'ratio',
            nargs='?',
            default=10000,
            type=int
        )

    def multiple_threads_fill_db(self, ratio):
        count = ratio // THREADS
        for index in range(THREADS):
            def wrapper(rt):
                print(f"- Started thread {index + 1}")
                self.fill_db(rt)

            x = threading.Thread(target=wrapper, args=(count,))
            x.start()

    def fill_db(self, ratio):
        self.fill_users_table(ratio)
        self.fill_moments_table(ratio * 10)
        self.fill_comments_table(ratio * 100)
        self.fill_likes_table(ratio * 10 * ratio // 2)
        self.fill_subscribers_table(ratio * (ratio - 1) // 3)

    def fill_users_table(self, ratio):
        User = get_user_model()
        for _ in range(ratio):
            username = self.fake.profile()["username"]
            path = settings.BASE_DIR / f"media/users/{username}/"
            with open(download_new_photo(path), 'rb') as ph_file:
                User.objects.create(**{
                    "username": username,
                    "email": self.fake.email(),
                    "name": ' '.join(self.fake.words(nb=2)),
                    "description": self.fake.sentence(nb_words=9),
                    "password": "simple",
                    "photo": ImageFile(ph_file)
                })

        self.users = get_user_model().objects.all()
        print(f'\t- added {ratio} users')

    def fill_moments_table(self, ratio):
        for _ in range(ratio):
            user = random.choice(self.users)
            path = settings.BASE_DIR / f"media/moments/{user.get_username()}"
            path = download_new_photo(path)

            description = self.fake.sentence(nb_words=15).split()
            for _ in range(random.randint(1, 5)):
                index = random.randrange(len(description))
                if description[index].startswith("#"):
                    continue

                description[index] = f"#{description[index]}".lower()
            description = ' '.join(description)

            with open(path, 'rb') as ph_file:
                Moment.objects.get_or_create(**{
                    "title": self.fake.sentence(nb_words=5),
                    "description": description,
                    "autor": user,
                    "image": ImageFile(ph_file),
                })

            self.moments = Moment.objects.all()
        print(f'\t- added {ratio} moments')

    def fill_comments_table(self, ratio):
        for _ in range(ratio):
            user = random.choice(self.users)
            moment = random.choice(self.moments)
            Comment.objects.create(**{
                "text": self.fake.sentence(nb_words=8),
                "autor": user,
                "moment": moment,
            })
        self.comments = Comment.objects.all()
        print(f'\t- added {ratio} comments')

    def fill_likes_table(self, ratio):
        for _ in range(ratio):
            user = random.choice(self.users)
            comment = random.choice(self.comments)
            CommentLike.objects.get_or_create(**{
                "autor": user,
                "comment": comment,
            })
        print(f'\t- added {ratio} likes for comments')

        for _ in range(ratio):
            user = random.choice(self.users)
            moment = random.choice(self.moments)
            MomentLike.objects.get_or_create(**{
                # TODO
                "autor": user,
                "moment": moment,
            })

        print(f'\t- added {ratio} likes for moments')

    def fill_subscribers_table(self, ratio):
        for _ in range(ratio):
            user1 = random.choice(self.users)
            user2 = random.choice(self.users)
            while user1 == user2:
                user1 = random.choice(self.users)
                user2 = random.choice(self.users)

            Subscription.objects.get_or_create(**{
                # TODO
                "autor": user1,
                "subscriber": user2,
            })

            if random.random() < 0.3:
                # С вероятностью 30% подписка будет взаимной
                Subscription.objects.get_or_create(**{
                    # TODO
                    "autor": user2,
                    "subscriber": user1,
                })

        print(f'\t- added {ratio} subscribers')
