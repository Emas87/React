from django.urls import path
from . import views

# URLConf
urlpatterns = [
    path('isolatedServers/', views.isolatedServers),
    path('users/', views.users),
    path('gpg/', views.gpg),
    path('exportGPGKey/', views.exportGPGKey),
    path('mfa/', views.mfa),
]