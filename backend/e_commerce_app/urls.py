from django.urls import path, re_path
from rest_framework import routers
from . import api
from .views import LoginView, LogoutView

router = routers.DefaultRouter()

router.register("api/tipo-productos", api.TipoProductoViewSet, "tipo-productos")
router.register("api/productos", api.ProductoViewSet, "productos")
router.register("api/usuarios", api.UsuarioViewSet, "usuarios")
router.register("api/metodo-pago", api.MetodoPagoViewSet, "metodo-pago")
router.register("api/ventas", api.VentaViewSet, "ventas")

urlpatterns = [
    path("auth/login/", LoginView.as_view(), name="auth_login"),
    path("auth/logout/", LogoutView.as_view(), name="auth_logout"),
]
urlpatterns += router.urls
