from django.urls import path
from .views import BlogApiView, BlogDetailsApiView

urlpatterns = [
    path('blogs', BlogApiView.as_view(), name='api_blog'),
    path('blogs/<slug:slug>', BlogDetailsApiView.as_view(), name='api_blog_details')
]

