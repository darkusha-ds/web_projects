from django.urls import path
from p6.views import *

urlpatterns = [
    path('', page_6, name='page_6'),
]
