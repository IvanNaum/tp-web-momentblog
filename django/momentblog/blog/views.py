from rest_framework.generics import RetrieveAPIView, ListAPIView

from blog.models import Moment
from blog.pagination import MomentPagination
from blog.serializers import ShortMomentSerializer, MomentSerializer


class MomentList(ListAPIView):
    queryset = Moment.objects.all()
    serializer_class = ShortMomentSerializer
    pagination_class = MomentPagination


class MomentDetail(RetrieveAPIView):
    queryset = Moment.objects.all()
    serializer_class = MomentSerializer
