from django.contrib.auth.views import LogoutView
from django.urls import path

from authentication.views import login_view, register
urlpatterns = [
    path('logout/', LogoutView.as_view(), name='logout'),
    path('login/', login_view, name="login"),
    path('register/', register, name="register"),
]
