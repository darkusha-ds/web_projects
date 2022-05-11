"""web_projects URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from web_projects.views import *

import p1
from p1 import urls

import p2
from p2 import urls

import p3
from p3 import urls

import p4
from p4 import urls

import p5
from p5 import urls

import p6
from p6 import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home.as_view(), name='home'),
    path('page_1/', include(p1.urls)),
    path('page_2/', include(p2.urls)),
    path('page_3/', include(p3.urls)),
    path('page_4/', include(p4.urls)),
    path('page_5/', include(p5.urls)),
    path('page_6/', include(p6.urls)),
]
