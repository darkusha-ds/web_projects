from django.urls import path
from p4_four.views import *

urlpatterns = [
    path('', page_4.as_view(), name='page_4'),
]
