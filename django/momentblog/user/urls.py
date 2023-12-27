from django.urls import path

from user import views

urlpatterns = [
    path(r'signup/', views.UserCreate.as_view(), name='signup'),
    path(r'edit_email', views.EditEmailView.as_view(), name='edit_email'),
    path(r'edit_nickname', views.EditUsernameView.as_view(),
         name='edit_nickname'),
    path(r'edit_photo', views.EditPhotoView.as_view(), name='edit_photo'),
]
