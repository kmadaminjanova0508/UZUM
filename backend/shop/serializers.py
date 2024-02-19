from rest_framework import serializers
from .models import Category, Product


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    class Meta:
        model = Product
        fields = ('id', 'category', 'name', 'slug', 'price', 'available', 'quantity', 'image', 'get_image',
                  'description_short', 'description_long', 'created', 'updated')

