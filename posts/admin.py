from django.contrib import admin

from posts.models import Blog, Category


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'user', 'category', 'image', 'created_at')


admin.site.register(Category)