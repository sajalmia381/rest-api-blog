from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import APIRegistrationView

urlpatterns = [
    path('register', APIRegistrationView.as_view(), name="api_registration"),
    path('token', TokenObtainPairView.as_view(), name='auth_token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view(), name='auth_token_refresh'),
]