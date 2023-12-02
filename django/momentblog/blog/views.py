from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveAPIView, ListAPIView

from blog.models import Moment, Comment
from blog.pagination import MomentPagination
from blog.serializers import ShortMomentSerializer, MomentSerializer, \
    CommentSerializer, UserSerializer, MomentImageSerializer


class MomentList(ListAPIView):
    queryset = Moment.objects.all()
    serializer_class = ShortMomentSerializer
    pagination_class = MomentPagination


class MomentImageList(ListAPIView):
    serializer_class = MomentImageSerializer
    pagination_class = MomentPagination

    def get_queryset(self):
        autor_username = self.kwargs['username']
        return Moment.objects.filter(autor__username=autor_username)


class MomentDetail(RetrieveAPIView):
    queryset = Moment.objects.all()
    serializer_class = MomentSerializer


class CommentList(ListAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        moment_id = self.kwargs['moment_id']
        return Comment.objects.filter(moment__pk=moment_id)


class UserDetail(RetrieveAPIView):
    lookup_field = "username"
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
