from rest_framework import routers
from . import api

router = routers.DefaultRouter()

router.register('api/productos', api.ProductoViewSet, 'productos' )
router.register('api/usuarios', api.UsuarioViewSet, 'usuarios' )
router.register('api/metodo-pago', api.MetodoPagoViewSet, 'metodo-pago' )
router.register('api/ventas', api.VentaViewSet, 'ventas' )

urlpatterns = router.urls