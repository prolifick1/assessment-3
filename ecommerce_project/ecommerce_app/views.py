from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def index(request):
    http_response = render(request, 'ecommerce_app/index.html')
    return http_response;

def cat1(request):
    http_response = render(request, 'ecommerce_app/cat1.html')
    return http_response

def cat2(request):
    http_response = render(request, 'ecommerce_app/cat2.html')
    return http_response

def cart(request):
    http_response = render(request, 'ecommerce_app/cart.html')
    return http_response

def search(request):
    http_response = render(request, 'ecommerce_app/search.html')
    return http_response
