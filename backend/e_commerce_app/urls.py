from django.urls import path, re_path
from rest_framework import routers
from . import api

router = routers.DefaultRouter()

router.register("api/tipo-productos", api.TipoProductoViewSet, "tipo-productos")
router.register("api/productos", api.ProductoViewSet, "productos")
router.register("api/usuarios", api.UsuarioViewSet, "usuarios")
router.register("api/metodo-pago", api.MetodoPagoViewSet, "metodo-pago")
router.register("api/carritos", api.CarritoViewSet, "carritos")
router.register("api/ventas", api.VentaViewSet, "ventas")

urlpatterns = [
    path("api/usuarios/autenticacion/", api.LoginView.as_view(), name="autenticacion"),
    path("api/usuarios/cerrar-sesion/", api.LogoutView.as_view(), name="cerrar-sesion"),
    path(
        "api/carritos/productos-carrito/",
        api.ProductosEnCarritoAPIView.as_view(),
        name="productos-en-carrito",
    ),
]
urlpatterns += router.urls
