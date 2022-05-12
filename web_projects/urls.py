from django.contrib import admin
from django.urls import path, include

from web_projects.views import *

import p0
from p0 import urls

urlpatterns = [
    path('', home, name='home'),
    path('admin/', admin.site.urls),
    path('page_0/', include(p0.urls)),
    path('<int:idx>', get_page, name='get_page'),
]
