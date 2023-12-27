from django.urls import path

from user import views

urlpatterns = [
    path(r'signup/', views.UserCreate.as_view(), name='signup'),
    path(r'edit_email/', views.edit_email, name='edit_email'),
    path(r'edit_nickname/', views.edit_nickname, name='edit_nickname'),
    path(r'edit_photo/', views.edit_photo, name='edit_photo'),
]
