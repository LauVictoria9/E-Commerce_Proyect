# E-Commerce partes de computadores
## Descripcion 

Sitio web en el cual se busca generar una simulacion de un centro de ventas electronico (E-Commerce) con funcionalidades basicas como lo es login, carrito de compras, etc

## Flujo de trabajo 
#### En el lado del _FrontEnd_
- React 
- Taildwind 

#### En el lado del _BackEnd_
- Django
- Django Rest Framework 

#### Para el gestor de _BD_
- MYSQL
## Colaboradores 
Estudiantes Universidad del Valle - Zarzal. Tecnologia en sistemas - 2711

## Requisitos pa la ejecucion
- Tener xampp, node y python instalados 
- Ejecutar el xampp y inicializar mysql
- Crear la base de datos ......



## Instrucciones para poder ejecutar el proyecto (backend)
- ejecutar virtualenv con el comando pip install virtualenv en una consola
- ejecutar virtualenv vmv
- ir a las opcion de visual llamada view, opcion command palette, escriben intepreter y seleccionan la opcion Python: select intepreter, selecionas el que tenga entre parentesis 'vmv':venv y abres otra terminal 
Pasarse a la carpeta Backend, para correr los comandos:
-  instalas django y django REST Framework con el siguiente comando pip install django djangorestframework
-  instalas el cliente mysql para realizar la conexion a MYSQL con el siguiente comando pip install mysqlclient
- python manage.py runserver para correr el servidor
- python manage.py migrate para realizar las migraciones respectivas
