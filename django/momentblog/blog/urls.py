from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .token import TokenView
from .views import test

urlpatterns = [
    path('', test),

    # JWT api
    path('token/', TokenView.as_view(),
         name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(),
         name='token_refresh'),
]
