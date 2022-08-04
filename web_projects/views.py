from django.views.generic import TemplateView
from django.shortcuts import render

def home(request): return render(request, 'pages/index.html', {'name': 'Home' })

def get_page(request, idx):
    if not idx:
        idx = 0
    return render(request, 'index.html', context={'idx': idx})
