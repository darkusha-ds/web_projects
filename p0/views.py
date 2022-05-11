from django.views.generic import TemplateView
from django.shortcuts import render

# class page_0(TemplateView): template_name = 'pages/page_0.html'
def page_0(request): return render(request, 'pages/index.html', {'name': 'Home' })
def get_page(request, idx):
    return render(request, f'pages/page_{idx}.html', {'name': 'Home' })
