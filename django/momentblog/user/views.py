from django.contrib.auth.decorators import login_required
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from user.models import MomentBlogUser
from user.serializer import MomentBlogUserSerializer


class UserCreate(APIView):
    def post(self, request, format='json'):
        serializer = MomentBlogUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EditEmailView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, format='json'):
        data = request.data
        user = MomentBlogUser.objects.filter(email=data["old_email"]).first()
        if user != request.user:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        user.email = data["new_email"]
        user.save()

        return Response(status=status.HTTP_200_OK)


@login_required
def edit_nickname(request):
    user = request.user


class EditUsernameView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, format='json'):
        data = request.data
        request.user.username = data["new_username"]
        request.user.save()

        return Response(status=status.HTTP_200_OK)


class EditPhotoView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, format='json'):
        data = request.data
        request.user.photo = data["new_photo"]
        request.user.save()

        return Response(status=status.HTTP_200_OK)
