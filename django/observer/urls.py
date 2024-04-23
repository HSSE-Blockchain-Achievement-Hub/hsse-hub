from django.urls import path
from . import views

urlpatterns = [
    path('user/<str:user_id>/', views.index)
]