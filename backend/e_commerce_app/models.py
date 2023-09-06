from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Producto(models.Model):
  nombre = models.CharField(max_length=100)
  descripcion = models.CharField(max_length=100)
  precio = models.IntegerField()
  
  def __str__(self):
        return self.nombre

class MetodoPago(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.CharField(max_length=200)
    
    def __str__(self):
        return self.nombre

class Venta(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.IntegerField()
    precio_total = models.IntegerField()
    metodo_pago = models.ForeignKey(MetodoPago, on_delete=models.CASCADE)
    fecha = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.usuario.username + " " + Producto.nombre 