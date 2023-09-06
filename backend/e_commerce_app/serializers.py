from rest_framework import serializers
from . import models
from django.contrib.auth.models import User

class ProductoSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Producto
    fields = ('id','nombre','descripcion','precio')

class UsuarioSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id','password','username','last_name','email','first_name')

class MetodoPagoSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.MetodoPago
    fields = ('id','nombre','descripcion')

class VentaSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Venta
    fields = ('id','usuario','producto','cantidad', 'precio_total','metodo_pago')
    read_only_fields = ('fecha',)

