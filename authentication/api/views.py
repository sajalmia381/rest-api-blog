from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from authentication.serializer import RegistrationUserSerializer


class APIRegistrationView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        _serializer = RegistrationUserSerializer(data=request.data)
        if _serializer.is_valid():
            instance = _serializer.save()
            if instance:
                return Response(status=status.HTTP_201_CREATED)
        return Response(_serializer.errors, status=status.HTTP_400_BAD_REQUEST)