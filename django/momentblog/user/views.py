from django.contrib.auth.decorators import login_required
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from user.serializer import MomentBlogUserSerializer


class UserCreate(APIView):
    def post(self, request, format='json'):
        serializer = MomentBlogUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@login_required
def edit_email(request):
    serializer = MomentBlogUserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.update(request.user)
        if user:
            return Response(status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@login_required
def edit_nickname(request):
    user = request.user


@login_required
def edit_photo(request):
    user = request.user
