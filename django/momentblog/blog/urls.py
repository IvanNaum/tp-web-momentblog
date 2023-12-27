from django.urls import path

from .views import MomentList, MomentDetail, CommentList, UserDetail, \
    MomentImageList, MomentCreate, CommentLikeView, MomentLikeView

urlpatterns = [
    path('moments/', MomentList.as_view()),
    path('moments/create', MomentCreate.as_view()),
    path('moments/<moment_id>/like', MomentLikeView.as_view()),
    path('moments/<pk>', MomentDetail.as_view()),
    path('moments/<moment_id>/comments', CommentList.as_view()),
    path('comments/<comment_id>/like', CommentLikeView.as_view()),

    # path('profiles/', ... .as_view()),
    path('profiles/<username>', UserDetail.as_view()),
    path('profiles/<username>/moments', MomentImageList.as_view()),
]
