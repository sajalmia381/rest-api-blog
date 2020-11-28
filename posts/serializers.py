from django.contrib.auth import get_user_model
from rest_framework import serializers

from posts.models import Blog, Category

User = get_user_model()


class BlogUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email')


class BlogCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', )


class BlogSerializer(serializers.ModelSerializer):
    user = BlogUserSerializer()
    category = BlogCategorySerializer()

    class Meta:
        model = Blog
        fields = ('slug', 'title', 'user', 'category', 'category', 'image', 'content', 'created_at')
