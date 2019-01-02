#from django.urls import path
from . import views
from django.conf.urls import url

urlpatterns = [
    #path('', views.resetHousie, name='resetHousie'),
    url(r'^$', views.celebrity, name='celebrity'),
    url(r'^getcelebrityimages/$', views.GetCelebrityImages, name='getcelebrityimages')
]