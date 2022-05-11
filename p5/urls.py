from django.urls import path
from p5.views import *

urlpatterns = [
    path('', page_5, name='page_5'),
]
