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

import p1_one
from p1_one import urls

import p2_two
from p2_two import urls

import p3_three
from p3_three import urls

import p4_four
from p4_four import urls

import p5_five
from p5_five import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home.as_view(), name='home'),
    path('page_1/', include(p1_one.urls)),
    path('page_2/', include(p2_two.urls)),
    path('page_3/', include(p3_three.urls)),
    path('page_4/', include(p4_four.urls)),
    path('page_5/', include(p5_five.urls)),
]
