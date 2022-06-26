from django.urls import path

from . import views

urlpatterns = [
    path('', views.htmlgoHome, name="htmlgoHome"),
    path('DataWiki/', views.goData, name="goData"),
    path('Forum/', views.htmlgoForum, name="htmlgoForum"),
    path('ShareHub/', views.htmlgoShareHub, name="htmlgoShareHub"),
]