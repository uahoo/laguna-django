from django.shortcuts import render

from django.shortcuts import redirect, render
from django.views import View
from django.http.request import *
from django.http.response import *
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User, AnonymousUser

from .models import *


def index(request: HttpRequest):
    news = News.objects.all().order_by('id')[:2]
    tittle = 'Сауна люкс Лагуна: снять сауну в Минске'
    user = {
        "name": Users.name,
        "surname": Users.surname,
        "login": Users.login,
        "password": Users.password,
        "email": Users.email,
        "phone": Users.phone_number
    }
    data = {'news': news, 'tittle': tittle, 'user': user}
    return render(request, 'index.html', context=data)


class Registration(View):
    def get(self, request: HttpRequest):
        return render(request, 'header.html')

    def post(self, request: HttpRequest):
        loging = request.POST['login']
        password = request.POST['password']
        try:
            user = User.objects.create_user(username=loging, password=password)
        except:
            return render(request, 'index.html')
        login(request, user)
        return redirect('/')


# class Registration(View):
#     def get(self, request: HttpRequest):
#         return render(request, 'header.html')
#
#     def post(self, request: HttpRequest):
#         login = request.POST['login']
#         password = request.POST['password']
#         name = request.POST['name']
#         surname = request.POST['surname']
#         phone = request.POST['number']
#         email = request.POST['email']
#         try:
#             user = Users.objects.create(
#                 username=login, password=password, name=name, surname=surname,
#                 phone_number=phone, email=email)
#             user.save()
#         except:
#             return render(request, 'header.html')
#         login(request, user)
#         return redirect('/')

class ContactView(View):
    def get(self, request: HttpRequest):
        return render(request, 'contacts.html')


class AboutView(View):
    def get(self, request: HttpRequest):
        return render(request, 'about.html')


class PricesView(View):
    def get(self, request: HttpRequest):
        return render(request, 'price.html')


class LoginView(View):
    def get(self, request: HttpRequest):
        return render(request, 'index.html')

    def post(self, request: HttpRequest):
        loging = request.POST['login']
        password = request.POST['passwordL']
        user = authenticate(request, username=loging, password=password)
        if user is None:
            return render(request, 'index.html')
        login(request, user)
        return redirect('/')


class UserPageView(View):
    def __get__(self, request: HttpRequest):
        return render(request, 'user-page.html')
