from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group
from . import models

admin.site.register(models.User, UserAdmin)
admin.site.register(models.Rol)
admin.site.register(models.Producto)
admin.site.register(models.TipoProducto)
admin.site.register(models.MetodoPago)
admin.site.register(models.Venta)
admin.site.unregister(Group)
