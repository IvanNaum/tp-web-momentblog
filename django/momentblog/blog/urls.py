from django.urls import path

from .views import MomentList, MomentDetail, CommentList, UserDetail, \
    MomentImageList

urlpatterns = [
    path('moments/', MomentList.as_view()),
    path('moments/<pk>', MomentDetail.as_view()),
    # path('moments/<pk>/like', ... .as_view()),
    path('moments/<moment_id>/comments', CommentList.as_view()),
    # path('moments/<moment_id>/comments/like', ... .as_view()),

    # path('profiles/', ... .as_view()),
    path('profiles/<username>', UserDetail.as_view()),
    path('profiles/<username>/moments', MomentImageList.as_view()),
]
