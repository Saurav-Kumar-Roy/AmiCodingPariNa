from .models import TextData
from rest_framework import serializers

class TextDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextData
        fields = ['id','user','text','created_at']

class ApiEndpointSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextData
        fields = ['created_at','text']