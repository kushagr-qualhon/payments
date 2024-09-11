from . import views
from django.urls import path, include

urlpatterns = [
    path('config/', views.stripe_config),
    path('create-checkout-session/', views.create_checkout_session),
]