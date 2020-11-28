from django.utils.crypto import get_random_string
from django.utils.text import slugify


def slug_generator(instance, new_slug=None):
    """
    :param instance: Modal Instance
    :param new_slug: None
    :return: slug
    """
    if new_slug is not None:
        slug = new_slug
    else:
        try:
            slug = slugify(instance.name)
        except AttributeError:
            slug = slugify(instance.title)
    Klass = instance.__class__
    qs = Klass.objects.filter(slug=slug)
    if qs.exists():
        new_slug = f'{slug}-{get_random_string()}'
        return new_slug
    return slug



