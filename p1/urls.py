from django.urls import path
from p1.views import *

urlpatterns = [
    path('', page_1.as_view(), name='page_1'),
]
