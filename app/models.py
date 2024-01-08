from django.db import models

class User(models.Model):
    username = models.CharField(max_length=255)
    age = models.IntegerField(null=True)
    phone = models.CharField(max_length=20, null=True)
    email = models.EmailField(null=True)
    image = models.ImageField(null=True)
    
    class Meta:
        db_table = "users_tb"
