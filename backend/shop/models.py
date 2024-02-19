from django.db import models
from django_resized import ResizedImageField

class Category(models.Model):
    name = models.CharField(max_length=50, unique=True, db_index=True)
    slug = models.SlugField(max_length=60, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    slug = models.SlugField(max_length=60, unique=True)
    price = models.DecimalField(decimal_places=2, max_digits=10)
    available = models.BooleanField(default=True)
    quantity = models.PositiveIntegerField(default=1)
    image = ResizedImageField(size=[400, 400], upload_to='product_pics/', blank=True, null=True)
    description_short = models.TextField(max_length=255, verbose_name='Short description', blank=True, null=True)
    description_long = models.TextField(verbose_name='Long description', blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    def get_image(self):
        return 'http://127.0.0.1:8000' + self.image.url



