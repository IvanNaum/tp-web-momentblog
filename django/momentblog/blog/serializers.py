from django.contrib.auth import get_user_model
from rest_framework import serializers

from blog.models import Moment, Comment


class ShortMomentSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="autor.username", read_only=True)

    class Meta:
        model = Moment
        fields = ['id', 'username', 'title', 'image']


class MomentSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="autor.username", read_only=True)
    likes = serializers.IntegerField(source="momentlike_set.count",
                                     read_only=True)

    class Meta:
        model = Moment
        fields = ["username", "title", "description", "image",
                  "created_date", "likes"]


class CommentSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="autor.username", read_only=True)
    likes = serializers.IntegerField(source="commentlike_set.count",
                                     read_only=True)

    class Meta:
        model = Comment
        fields = ["username", "text", "likes"]


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="autor.username", read_only=True)
    moments = serializers.IntegerField(source="moment_set.count",
                                       read_only=True)
    subscribers = serializers.IntegerField(source="subscribers.count",
                                           read_only=True)
    subscriptions = serializers.IntegerField(source="subscriptions.count",
                                             read_only=True)

    class Meta:
        model = get_user_model()
        fields = ["username", "photo", "name", "description", "moments",
                  "subscribers", "subscriptions"]
