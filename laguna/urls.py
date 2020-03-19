"""laguna URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
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
from django.urls import path
import webapp.views
import laguna.settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', webapp.views.index, name='index'),
    path('index', webapp.views.index,name='index'),
    path('register', webapp.views.Registration.as_view(), name='register'),
    path('contacts', webapp.views.ContactView.as_view(), name='Contacts'),
    path('about', webapp.views.AboutView.as_view(), name='About'),
    path('price', webapp.views.PricesView.as_view(),name='Price'),
    path('login',webapp.views.LoginView.as_view(),name='login'),
    path('user-page',webapp.views.UserPageView.as_view(),name='user-page')
]
# + static(laguna.settings.STATIC_URL, document_root=laguna.settings.STATIC_ROOT)
