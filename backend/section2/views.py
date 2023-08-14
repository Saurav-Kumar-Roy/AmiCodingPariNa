from django.contrib.auth.models import User
from .serializers import TextDataSerializer, ApiEndpointSerializer
from .models import TextData
from rest_framework import generics
from rest_framework.response import Response
from datetime import datetime


class TextDataView(generics.CreateAPIView):
    queryset = TextData.objects.all()
    serializer_class = TextDataSerializer

class ApiEndpoint(generics.CreateAPIView):
    #permission_classes = (permissions.)
    serializer_class = ApiEndpointSerializer
    def post(self,request,format=None):
        data = self.request.data
        user = User.objects.get(id=data['user_id'])
        start_date = datetime.strptime(data['start_datetime'], '%Y-%m-%d %H:%M:%S')
        end_date = datetime.strptime(data['end_datetime'], '%Y-%m-%d %H:%M:%S')
        queryset = TextData.objects.filter(user=user)
        queryset = queryset.filter(created_at__range=(start_date,end_date))
        serializer = ApiEndpointSerializer(queryset,many=True)
        return Response({'status':'success','user_id':data['user_id'],'payload':serializer.data})