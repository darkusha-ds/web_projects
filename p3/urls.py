from django.urls import path
from p3.views import *

urlpatterns = [
    path('', page_3, name='page_3'),
]
