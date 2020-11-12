from django.contrib.auth.views import LogoutView
from django.urls import path

from authentication.views import login_view, register

urlpatterns = [
    path('auth/logout/', LogoutView.as_view(), name='logout'),
    path('auth/login/', login_view, name="login"),
    path('auth/register/', register, name="register"),
]
