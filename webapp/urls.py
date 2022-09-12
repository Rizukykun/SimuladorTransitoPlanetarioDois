from django.urls import path
from webapp.views import home, simulator, default

urlpatterns = [
	path(r'',home),
	path(r'index/',home),
	path(r'simulator/', simulator),
	path(r'default/', default)
]