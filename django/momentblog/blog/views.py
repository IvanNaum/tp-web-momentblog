from rest_framework import generics

from blog.models import Moment
from blog.pagination import MomentPagination
from blog.serializers import ShortMomentSerializer


class MomentList(generics.ListAPIView):
    queryset = Moment.objects.all()
    serializer_class = ShortMomentSerializer
    pagination_class = MomentPagination
