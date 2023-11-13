from django.urls import path

from .views import MomentList, MomentDetail

urlpatterns = [
    path('moments/', MomentList.as_view()),
    path('moments/<pk>', MomentDetail.as_view()),
    # path('moments/<id>/comments', MomentList.as_view())
]
