from django.http import HttpResponse
from django.shortcuts import render
from django.template.loader import render_to_string

# Create your views here.

def index(request):
    t = render_to_string('search/search.html')
    return HttpResponse(t)