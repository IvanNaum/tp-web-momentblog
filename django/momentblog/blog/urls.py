from django.urls import path

from .views import MomentList

urlpatterns = [
    path('moments/', MomentList.as_view()),
]
