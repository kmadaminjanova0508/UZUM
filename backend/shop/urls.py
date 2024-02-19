from django.urls import path
from . import views


urlpatterns = [
    path('products/', views.products_list),
    path('product/<slug:slug>/', views.ProductDetail.as_view())
]

