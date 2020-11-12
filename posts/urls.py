from django.urls import path, re_path
from posts.views import posts, post_details

urlpatterns = [
    path('', posts, name='home'),
    path('<int:post_id>', post_details, name='post_details'),
]
