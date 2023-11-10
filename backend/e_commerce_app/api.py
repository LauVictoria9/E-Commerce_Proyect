from rest_framework import viewsets,  permissions
from . import models
from . import serializers

class TipoProductoViewSet(viewsets.ModelViewSet):
  queryset = models.TipoProducto.objects.all()
  permission_classes = [permissions.AllowAny]
  serializer_class = serializers.TipoProductoSerializer

class ProductoViewSet(viewsets.ModelViewSet):
  queryset = models.Producto.objects.all()
  permission_classes = [permissions.AllowAny]
  serializer_class = serializers.ProductoSerializer

class RolViewSet(viewsets.ModelViewSet):
  queryset = models.Rol.objects.all()
  permission_classes = [permissions.AllowAny]
  serializer_class = serializers.RolSerializer

class UsuarioViewSet(viewsets.ModelViewSet):
  queryset = models.User.objects.all()
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