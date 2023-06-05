from django.urls import path
from webapp.views import home, simulator, open

urlpatterns = [
	path(r'',home),
	path(r'index/',home),
	path(r'simulator/', simulator, name = 'simulator'),
    path(r'open/', open)
]