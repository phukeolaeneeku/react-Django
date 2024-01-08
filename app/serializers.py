from rest_framework import serializers
from django.http import HttpRequest
from .models import User

class UserForm(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
    
    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['image_url'] = instance.image.url if instance.image else None

        if 'request' in self.context and isinstance(self.context['request'], HttpRequest):
            data['image_url'] = self.context['request'].build_absolute_uri(data['image_url']) if data['image_url'] else None
        else:
            data['image_url'] = None

        return data