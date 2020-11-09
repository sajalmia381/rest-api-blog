from django.contrib import messages
from django.http import Http404
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

from .forms import LoginForm, RegistrationForm

# LOGIN VIEW ENDPOINT

def login_view(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, password=password, username=username)
        if user is not None:
            login(request, user)
            return redirect('home')
        messages.error(request, 'Username or password is not correct')
    return render(request, 'login.html',)


def register(request):
    form = RegistrationForm()
    if request.method == "POST":
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            messages.success(request, f'Account was created for {user.username}' )
            return redirect('login')
    context = {
        'form': form
    }
    return render(request, 'register.html', context)
