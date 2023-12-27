from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from user.models import MomentBlogUser


class MomentBlogUserSerializer(serializers.ModelSerializer):
    users = MomentBlogUser.objects.all()

    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=users)]
    )
    username = serializers.CharField(
        validators=[UniqueValidator(users)]
    )
    photo = serializers.ImageField()
    password = serializers.CharField(min_length=8)

    def create(self, validated_data):
        user = MomentBlogUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            photo=validated_data['photo'],
            password=validated_data['password']
        )
        return user

    class Meta:
        model = MomentBlogUser
        fields = ('id', 'username', 'email', 'photo', 'password')
