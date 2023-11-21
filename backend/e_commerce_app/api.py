from rest_framework import viewsets, permissions, generics
from . import models
from . import serializers


class TipoProductoViewSet(viewsets.ModelViewSet):
    queryset = models.TipoProducto.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.TipoProductoSerializer


class ProductoViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.ProductoSerializer
    queryset = models.Producto.objects.all()

    def get_queryset(self):
        queryset = models.Producto.objects.all()
        tipoProducto = self.request.query_params.get("tipo-producto")
        params = {
            "marca": self.request.query_params.get("marca"),
            "tipoProducto_id": models.TipoProducto.objects.get(
                tipoProducto=tipoProducto
            ).id
            if tipoProducto is not None
            else None,
            "oferta__gt": self.request.query_params.get("oferta"),
        }
        paramsValue = {}

        for clave, valor in params.items():
            if params[clave] is not None:
                paramsValue[clave] = valor

        if paramsValue:
            queryset = queryset.filter(**paramsValue)

        return queryset


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
