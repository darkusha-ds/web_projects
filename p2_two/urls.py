from django.urls import path
from p2_two.views import *

urlpatterns = [
    path('', page_2.as_view(), name='page_2'),
]
