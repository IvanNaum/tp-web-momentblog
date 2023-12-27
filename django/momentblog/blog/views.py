from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import RetrieveAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from blog.models import Moment, Comment, CommentLike, MomentLike
from blog.pagination import MomentPagination
from blog.serializers import ShortMomentSerializer, MomentSerializer, \
    CommentSerializer, UserSerializer, MomentImageSerializer


class MomentCreate(APIView):
    def post(self, request, format='json'):
        serializer = MomentSerializer(data=request.data, )
        if serializer.is_valid():
            moment = serializer.save(autor=request.user)
            if moment:
                return Response(status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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


class CommentLikeView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, comment_id):
        comment = Comment.objects.filter(pk=comment_id).first()
        if not comment:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        like = CommentLike.objects.filter(autor=request.user,
                                          comment=comment)
        if like:
            like.delete()
            return Response(status=status.HTTP_200_OK)

        CommentLike(autor=request.user, comment=comment).save()
        return Response(status=status.HTTP_200_OK)


class MomentLikeView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, moment_id):
        moment = Moment.objects.filter(pk=moment_id).first()
        if not moment:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        like = MomentLike.objects.filter(autor=request.user,
                                         moment=moment)
        if like:
            like.delete()
            return Response(status=status.HTTP_200_OK)

        MomentLike(autor=request.user, moment=moment).save()
        return Response(status=status.HTTP_200_OK)
