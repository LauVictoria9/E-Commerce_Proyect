from rest_framework import viewsets,  permissions
from . import models
from django.contrib.auth.models import User
from . import serializers

class ProductoViewSet(viewsets.ModelViewSet):
  queryset = models.Producto.objects.all()
  permission_classes = [permissions.AllowAny]
  serializer_class = serializers.ProductoSerializer

class UsuarioViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  permission_classes = [permissions.AllowAny]
  serializer_class = serializers.UsuarioSerializer

class MetodoPagoViewSet(viewsets.ModelViewSet):
  queryset = models.MetodoPago.objects.all()
  permission_classes = [permissions.AllowAny]
  serializer_class = serializers.MetodoPagoSerializer

class VentaViewSet(viewsets.ModelViewSet):
  queryset = models.Venta.objects.all()
  permission_classes = [permissions.AllowAny]
  serializer_class = serializers.VentaSerializer