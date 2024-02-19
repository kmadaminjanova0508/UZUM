from django.contrib import admin
from .models import Product, Category


class ProductInline(admin.TabularInline):
    prepopulated_fields = {'slug': ('name',)}
    extra = 0
    model = Product
    fields = ('name', 'slug', 'price', 'quantity', 'available')
    show_change_link = True


class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}
    fields = (('name', 'slug'),)
    inlines = (ProductInline,)


class ProductAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}
    fields = (
        ('category', 'image'),
        ('name', 'slug'),
        ('price', 'quantity'),
        'description_short', 'description_long', 'available'
    )
    list_display = ('name', 'category', 'price', 'quantity', 'available', 'created', 'updated')
    list_filter = ('available', 'created', 'updated')
    search_fields = ('name',)
    list_editable = ('price', 'quantity', 'available')
    list_display_links = ('name',)


admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
