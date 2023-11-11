import os
import django


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "e_commerce.settings")
django.setup()

from e_commerce_app import models

tiposUsuario = [
  {'tipo': 'usuario'},
  {'tipo': 'administrador'}
]

usuarios = [
  {'nombreUsuario':'romero', 'contraseña':'romero123', 'email':'romero@gmail.com', 'rol':1},
  {'nombreUsuario':'ejemplo', 'contraseña':'ejemplo123', 'email':'ejemplo@gmail.com', 'rol':1},
  {'nombreUsuario':'ejemplo2', 'contraseña':'ejmplo2123', 'email':'ejemplo2@gmail.com', 'rol':2},
  ]

tiposProducto = [
  {'tipoProducto':'grafica', 'descripcion':'grafica de video'},
  {'tipoProducto':'monitor', 'descripcion':'monitor de calidad'},
  {'tipoProducto':'procesador', 'descripcion':'procesador increible'},
  {'tipoProducto':'portatil', 'descripcion':'portatil facil de llevar a todas partes'},
  ]

productos = [
  {'nombre':'rtx 4090', 'detalles':'asdfa','precio':100000,'cantidad':15,'tipoProducto_id':1,'imagen':''}
]

if __name__ == "__main__":
  # Crea los tipos de Rol
  for rol in tiposUsuario:
    models.Rol.objects.create(tipoDeUsuario=rol['tipo'])

  # Crea los usuario
  for usuario in usuarios:
    models.User.objects.create_user(username=usuario['nombreUsuario'], password=usuario['contraseña'],email=usuario['email'],rol_id=usuario['rol'])

  # Crea los tipos de producto
  for tipoProducto in tiposProducto:
    models.TipoProducto.objects.create(tipoProducto=tipoProducto['tipoProducto'], descripcion=tipoProducto['descripcion'])

  