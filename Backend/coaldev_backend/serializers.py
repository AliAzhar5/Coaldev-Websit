from rest_framework import serializers
from .models import Portfolio_Projects, Portfolio_Images

class Portfolio_ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portfolio_Projects
        fields = '__all__'

class Portfolio_ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portfolio_Images
        fields = ['id', 'project', 'image_url']