from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PortfolioProjectsViewSet, PortfolioImagesViewSet

router = DefaultRouter()
router.register(r'projects', PortfolioProjectsViewSet, basename='portfolio-projects')
router.register(r'images', PortfolioImagesViewSet, basename='portfolio-images')

urlpatterns = [
    path('', include(router.urls)),
]
