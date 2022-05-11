from django.shortcuts import redirect

def home(request):
    response = redirect('/page_0/')
    return response
