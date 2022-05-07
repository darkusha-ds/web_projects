from django.urls import path
from p5_five.views import *

urlpatterns = [
    path('', page_5.as_view(), name='page_5'),
]
