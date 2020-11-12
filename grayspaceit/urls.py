"""grayspaceit URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from posts.views import posts, ReactFrontendView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('authentication.urls')),
    path('posts/', include('posts.urls')),
    path('', posts),
    re_path(r'^react/', ReactFrontendView.as_view()),
    path('api/auth/token', TokenObtainPairView.as_view(), name='auth_token_obtain_pair'),
    path('api/auth/token/refresh', TokenRefreshView.as_view(), name='auth_token_refresh'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)