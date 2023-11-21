from django.contrib import admin
from django.urls import path, include, re_path
from django.views.static import serve
from django.conf import settings
from e_commerce_app.views import LoginView, LogoutView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('e_commerce_app.urls')),
]

urlpatterns +=[
  re_path(r'^media/(?P<path>.*)$',serve, {'document_root': settings.MEDIA_ROOT,})
]