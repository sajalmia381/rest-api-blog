from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import pre_save
from django.dispatch import receiver

from grayspaceit.utils import slug_generator

User = get_user_model()


class Category(models.Model):
    name = models.CharField(max_length=120)
    slug = models.SlugField(blank=True, null=True)

    def __str__(self):
        return self.name

@receiver(pre_save, sender=Category)
def category_pre_save(sender, instance, *args, **kwargs):
    if instance.slug is None:
        instance.slug = slug_generator(instance)

class Blog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=250)
    slug = models.SlugField(blank=True, null=True)
    image = models.ImageField(blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)

    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title


@receiver(pre_save, sender=Blog)
def blog_pre_save(sender, instance, *args, **kwargs):
    if instance.slug is None:
        instance.slug = slug_generator(instance)

