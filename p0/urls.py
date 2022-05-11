from django.urls import path
from p0.views import *

urlpatterns = [
    path('', page_0, name='page_0'),
    path('?page=<int:idx>', get_page, name='get_page'),
]
