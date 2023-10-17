# E-COMMERCER - PERIFERICOS DE COMPUTADORES

## Descripcion

Sitio web en el cual se busca generar una simulacion de un centro de ventas electronico (E-Commerce) con funcionalidades basicas como lo es login, carrito de compras, etc

## Flujo De Trabajo

### _FrontEnd_

- React
- Taildwind

### _BackEnd_

- Django
- Django Rest Framework

### _Base De Datos_

- MYSQL

## Colaboradores

Estudiantes Universidad del Valle - Zarzal. Tecnologia en sistemas - 2711

## Aplicaciones Necesarias

- Xampp - Para poder hacer uso de mysql
- Node - Principalmente su manejador de paquetes para instalar ciertos paquetes dell lado de frontend
- Python - Para poder seguir el flujo de trabajo de el lado del backend

## Ejecucion Del Proyecto

- Ejecutar el xampp y inicializar mysql
- Crear la base de datos ......

## Ejecutar Frontend

Ingresar a la carpeta **_frontend_ (`cd frontend`)** y correr los siguientes comandos:

- Para instalar los paquetes necesarios
  - `npm install`
- Correr el servidor de prueba
  - `npm run dev` y abres la url dada

## Ejecutar Backend

- Crear un entorno virtual dentro de la carpeta principal del proyecto, con los siguiente comandos en la terminal de comandos:
  - `pip install virtualenv`
  - `virtualenv venv`
  - ir a las opcion de visual llamada view, opcion command palette, escriben intepreter y seleccionan la opcion Python: select intepreter, selecionas el que tenga entre parentesis 'venv':venv y abres otra terminal, de esta manera su entorno virtual ya esta activado.
- Pasarse a la carpeta **_backend (`cd backend`)_** instalar los paquetes correspondientes:

  - `pip install -r requierements.txt`

- Realizar las migraciones a la base de datos, esto creara las tablas correspondientes:
  - `python manage.py migrate`
- Luego para correr el servidor de prueba:
  - `python manage.py runserver` y abres la url dada
