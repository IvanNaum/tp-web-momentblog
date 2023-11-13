from rest_framework.generics import RetrieveAPIView, ListAPIView

from blog.models import Moment, Comment
from blog.pagination import MomentPagination
from blog.serializers import ShortMomentSerializer, MomentSerializer, \
    CommentSerializer


class MomentList(ListAPIView):
    queryset = Moment.objects.all()
    serializer_class = ShortMomentSerializer
    pagination_class = MomentPagination


class MomentDetail(RetrieveAPIView):
    queryset = Moment.objects.all()
    serializer_class = MomentSerializer


class CommentList(ListAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        moment_id = self.kwargs['moment_id']
        return Comment.objects.filter(moment__pk=moment_id)
