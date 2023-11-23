from rest_framework import viewsets, permissions
from rest_framework.pagination import PageNumberPagination
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

    # Se modifica la siguiente funcion, esto para personalizar las respuestas a la hora de hacer una consulta
    def get_queryset(self):
        queryset = models.Producto.objects.all()
        # pageSize almacena un argumento que viene desde la url y servira para definir cuantos registros se devolveran como respuesta
        pageSize = self.request.query_params.get("page-size")
        if pageSize is not None and pageSize != "0":
            # el atributo pagination_class por defecto viene vacio, pero en este caso se le define una clase para manejar la paginacion
            self.pagination_class = PageNumberPagination
            self.pagination_class.page_size = pageSize
        tipoProducto = self.request.query_params.get("tipo-producto")
        id = self.request.query_params.get("id")
        params = {
            "marca__icontains": self.request.query_params.get("marca"),
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
            queryset = (
                queryset.filter(**paramsValue).exclude(id=id)
                if id is not None
                else queryset.filter(**paramsValue)
            )

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
