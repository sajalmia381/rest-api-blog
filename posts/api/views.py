from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.authentication import JWTAuthentication, JWTTokenUserAuthentication

from posts.models import Blog
from posts.serializers import BlogSerializer


class BlogApiView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        snippets = Blog.objects.all()
        serializer = BlogSerializer(snippets, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = BlogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def get_object_or_404(slug):
    try:
        obj = Blog.objects.get(slug=slug)
        return obj
    except Blog.DoesNotExist:
        return Response({}, status=status.HTTP_404_NOT_FOUND)


class BlogDetailsApiView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, slug):
        obj = get_object_or_404(slug)
        serializer = BlogSerializer(obj)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, slug):
        obj = get_object_or_404(slug)
        serializer = BlogSerializer(obj, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    def delete(self, request, slug):
        obj = get_object_or_404(slug)
        obj.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)