from django.contrib import admin
from django.urls import path, include

from web_projects.views import *

urlpatterns = [
    path('', home, name='home'),
    path('admin/', admin.site.urls),
    path('<int:idx>', get_page, name='get_page'),
]
