from django.urls import path
from . import views

urlpatterns = [
    path('achievements/', views.index)
]
