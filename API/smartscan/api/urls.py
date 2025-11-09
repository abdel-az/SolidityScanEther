from django.urls import path
from .views import detect_vulnerabilities

urlpatterns = [
    path('predict/', detect_vulnerabilities),
]
