from django.urls import path
from . import views


urlpatterns = [
        path('', views.index, name='index'),
        path('cat1', views.cat1, name='cat1'),
        path('cat2', views.cat2, name='cat2'),
        path('cart', views.cart, name='cart'),
        path('search', views.search, name='search'),
]


