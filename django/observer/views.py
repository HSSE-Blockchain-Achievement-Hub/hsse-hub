from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import render
from django.template.loader import render_to_string

# Create your views here.

def index(request, user_id):
    t = render_to_string('observer/observer.html')
    return HttpResponse(t)

def page_not_found(request, exception):
    return HttpResponseNotFound("<h1>Страница не найдена</h1>")