from django.urls import path
from .views import create_user, get_all_users
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('create/', create_user, name='create_user'),
    path('users/', get_all_users, name='user_list'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)