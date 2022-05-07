from django.urls import path
from p1_one.views import *

urlpatterns = [
    path('', page_1.as_view(), name='page_1'),
]
