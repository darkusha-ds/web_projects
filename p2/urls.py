from django.urls import path
from p2.views import *

urlpatterns = [
    path('', page_2.as_view(), name='page_2'),
]
