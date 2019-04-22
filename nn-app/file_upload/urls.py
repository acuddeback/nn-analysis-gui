from django.urls import path

from django.conf.urls import url
from django.views.generic.base import RedirectView
from . import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^submit/$', views.upload_file, name='upload'),
    url(r'^runscript/$', views.runscript, name='makeplot'),
]
