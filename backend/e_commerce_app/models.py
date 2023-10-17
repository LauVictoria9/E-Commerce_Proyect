from django.db import models
from django.contrib.auth.models import User
from datetime  import datetime


# Create your models here.

class tipo_producto(models.Model):
    tipo_producto = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nombre_tipoP +" "   + self.descripcion
    
class producto(models.Model):
   nombreProducto = models.CharField(max_length=100)
   detalles = models.CharField(max_length=100)
   precio = models.IntegerField(max_length=100)
   cantidadProducto = models.IntegerField(max_length=100)
   #imagen
   tipo_producto = models.ForeignKey(tipo_producto, on_delete=models.CASCADE)
   def __str__(self):
        return self.tipo_producto.tipo_producto + " " + self.nombreProducto + " " + self.detalles + " " + self.precio + " " + self.cantidadProducto 
    
    

class rol(models.Model):
    tipoDeUsuario = models.CharField(max_length=100)
    def __str__(self):
        return self.tipoDeUsuario

#preguntar ahora usuario
class user(models.Model):
    tipoDeUsuario = models.ForeignKey(rol, on_delete=models.CASCADE)
    nombreUser = models.CharField(max_length=100)
    apellidoUser = models.CharField(max_length=100)
    DireccionUser = models.CharField(max_length=100)
    telefonoUser = models.CharField(max_length=100)
    password= models.CharField(max_length=100)     
    def __str__(self):
        return self.rol.tipoDeUsuario # aqui se debe cambiar

    
    #tambien para mirar metodoPago
class metodoPago(models.Model):
    nombreMetodo = models.CharField(max_length=200)
    descripcionMetodo = models.CharField(max_length=200)
    
    def __str__(self):
        return self.nombreMetodo+" "+self.descripcionMetodo

class Venta_Producto(models.Model):
    nombreUser = models.ForeignKey(user, on_delete=models.CASC)
    nombreProducto = models.ForeignKey(producto, on_delete=models.CASCADE)
    cantidadTotal =models.IntegerField(max_length=100)
    fechaCompra = models.DateField()
    direccionEntrega = models.CharField(max_length=100)
    precioTotal = models.IntegerField(max_length= 150)
    nombreMetodo = models.ForeignKey(metodoPago, on_delete=models.CASC)

    
    #def __str__(self):
        #return self.user.nombreUser + " " + Producto.nombreProducto +" " + self.cantidadTotal+" " + self.fechaCompra +" " + self.direccionEntrega +" " +  self.metodoPago.nombreMetodo +" " + self.precioTotal