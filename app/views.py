from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from django.http import JsonResponse
from .models import User
from .serializers import UserForm

@api_view(['POST'])
@parser_classes([MultiPartParser])
def create_user(request):
    serializer = UserForm(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'User created successfully'}, status=201)

    return Response({'error': 'Invalid data'}, status=400)

def get_all_users(request):
    users = User.objects.all()
    serializer = UserForm(users, many=True, context={'request': request})
    
    # Correct the return statement
    return JsonResponse({'users': serializer.data})