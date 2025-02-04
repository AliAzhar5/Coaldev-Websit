from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Portfolio_Projects, Portfolio_Images
from .serializers import Portfolio_ProjectsSerializer, Portfolio_ImagesSerializer

class IsSuperUserOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:  # GET, HEAD, OPTIONS
            return True
        return request.user and request.user.is_superuser  # Only superusers can modify

class PortfolioProjectsViewSet(viewsets.ModelViewSet):
    queryset = Portfolio_Projects.objects.all()
    serializer_class = Portfolio_ProjectsSerializer
    permission_classes = [IsSuperUserOrReadOnly]

    def create(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            return Response({'error': 'Only superusers can create projects.'}, status=status.HTTP_403_FORBIDDEN)

        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Project created successfully!', 'data': serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            return Response({'error': 'Only superusers can update projects.'}, status=status.HTTP_403_FORBIDDEN)

        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Project updated successfully!', 'data': serializer.data}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            return Response({'error': 'Only superusers can delete projects.'}, status=status.HTTP_403_FORBIDDEN)

        instance = self.get_object()
        instance.delete()
        return Response({'message': 'Project deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)



class PortfolioImagesViewSet(viewsets.ModelViewSet):
    queryset = Portfolio_Images.objects.all()
    serializer_class = Portfolio_ImagesSerializer
    permission_classes = [IsSuperUserOrReadOnly]

    def create(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            return Response({'error': 'Only superusers can upload images.'}, status=status.HTTP_403_FORBIDDEN)

        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Image uploaded successfully!', 'data': serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            return Response({'error': 'Only superusers can delete images.'}, status=status.HTTP_403_FORBIDDEN)

        instance = self.get_object()
        instance.delete()
        return Response({'message': 'Image deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
