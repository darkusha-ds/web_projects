from django.urls import path
from p4.views import *

urlpatterns = [
    path('', page_4, name='page_4'),
]
