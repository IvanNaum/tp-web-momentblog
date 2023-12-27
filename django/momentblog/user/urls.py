from django.urls import path

from user import views

urlpatterns = [
    path(r'signup/', views.UserCreate.as_view(), name='signup'),
]
