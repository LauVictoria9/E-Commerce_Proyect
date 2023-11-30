from rest_framework import viewsets, permissions
from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.authtoken.models import Token
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from . import models
from . import serializers


class TipoProductoViewSet(viewsets.ModelViewSet):
    queryset = models.TipoProducto.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.TipoProductoSerializer


class CarritoViewSet(viewsets.ModelViewSet):
    queryset = models.Carrito.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.CarritoSerializer

    def get_queryset(self):
        queryset = models.Carrito.objects.all()
        productos = self.request.query_params.get("productos")

        if productos is not None:
            key = self.request.headers.get("Authorization")
            userId = Token.objects.get(key=key).user_id
            queryset = queryset.filter(usuario=userId, finalizado=False)

        return queryset

    @action(detail=True, methods=["delete"])
    def eliminar_producto(self, request, pk=None):
        carrito = self.get_object()
        producto_id = request.query_params.get("producto_id")

        if producto_id:
            try:
                carrito.productos.remove(producto_id)
                return Response(
                    {"message": "Producto eliminado del carrito correctamente."},
                    status=204,
                )
            except Exception as e:
                return Response({"error": str(e)}, status=400)
        else:
            return Response({"error": "ID del producto no proporcionado."}, status=400)

    @action(detail=True, methods=["post"])
    def agregar_producto(self, request, pk=None):
        carrito = self.get_object()
        producto_id = request.query_params.get("producto_id")

        if producto_id:
            try:
                producto = models.Producto.objects.get(pk=producto_id)
                carrito.productos.add(producto)
                return Response(
                    {"message": "Producto agregado al carrito correctamente."},
                    status=201,
                )
            except models.Producto.DoesNotExist:
                return Response({"error": "El producto no existe."}, status=400)
            except Exception as e:
                return Response({"error": str(e)}, status=400)
        else:
            return Response({"error": "ID del producto no proporcionado."}, status=400)


class ProductosEnCarritoAPIView(APIView):
    queryset = models.TipoProducto.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.TipoProductoSerializer

    def get_queryset(self):
        queryset = queryset.filter(usuario=userId)
        key = self.request.headers.get("Authorization")
        userId = Token.objects.get(key=key).user_id
        productos = self.request.query_params.get("productos")

        return queryset


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
            "carrito__user": self.request.query_params.get("usuario"),
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

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        self.perform_create(serializer)
        user = serializer.instance

        # Generar o recuperar el token asociado al usuario
        token = Token.objects.create(user=user)

        headers = self.get_success_headers(serializer.data)
        return Response(
            {"token": token.key},  # Devuelve el token al cliente
            status=status.HTTP_201_CREATED,
            headers=headers,
        )


class LoginView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        user = authenticate(request, email=email, password=password)

        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key}, status=status.HTTP_200_OK)
        else:
            return Response(
                {"error": "Credenciales inválidas"}, status=status.HTTP_401_UNAUTHORIZED
            )


class LogoutView(APIView):
    def post(self, request):
        try:
            # Obtener el token del encabezado de autorización
            token_key = request.headers.get("Authorization")
            token = Token.objects.get(key=token_key)
            token.delete()
            return Response(
                {"message": "Sesión cerrada correctamente"}, status=status.HTTP_200_OK
            )
        except Token.DoesNotExist:
            return Response(
                {"error": "Token inválido"}, status=status.HTTP_401_UNAUTHORIZED
            )
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class MetodoPagoViewSet(viewsets.ModelViewSet):
    queryset = models.MetodoPago.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.MetodoPagoSerializer


class VentaViewSet(viewsets.ModelViewSet):
    queryset = models.Venta.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.VentaSerializer
