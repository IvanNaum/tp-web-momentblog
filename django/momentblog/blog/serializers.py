from rest_framework import serializers

from blog.models import Moment


class ShortMomentSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="autor.username", read_only=True)

    class Meta:
        model = Moment
        fields = ['id', 'username', 'title', 'image']
