from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView #se importan las vistas 

import mercadopago

# Create your views here.
class LoginView(APIView):
  def post(self, request):
    email = request.data.get('email',None)
    password = request.data.get('password',None)
    user = authenticate(email=email, password=password)

    if user:
      login(request, user)
      return Response(status=status.HTTP_200_OK)
    
    return Response(status=status.HTTP_404_NOT_FOUND)
  
class LogoutView(APIView):
  def post(self, request):
      logout(request)

      return Response(status=status.HTTP_200_OK)

class PaymentView(APIView):
  def post(self, request): # aqui se manejan las sollicitudes HTTP POS a la ruta de pago
    
    #se integra con  la instacia la llave de acceso que nos da la pagina 
    sdk = mercadopago.SDK("TEST-416579947128865-112820-0118d8a35783cd83ababcb2e9ee7838c-1570676804")
     #informacion sobre los productos
    preference_data  = {
      "items": [
        {
          "title": "Portátil HP 15-dw3505la",
          "unit_price": 500000,
          "currency_id": "COP",
          "quantity": 1
        },
         {
          "title": "Portátil HP 15-dw3505la",
          "unit_price": 500000,
          "currency_id": "COP",
          "quantity": 1
        },
         {
          "title": "Portátil HP 15-dw3505la",
          "unit_price": 500000,
          "currency_id": "COP",
          "quantity": 1
        }
      ]
    }
    # se almacena la respuesta, se imprime y se devuelve al cliente con una respuesta HTTP_200_OK
    preference_response = sdk.preference().create(preference_data)
    preference = preference_response["response"]
    print(preference)
    return Response(preference, status=status.HTTP_200_OK)# HTTP_200_OK signifca que esta bieeen