from django.urls import path
from .views import TextDataView, ApiEndpoint
    


urlpatterns = [
    path('save/', TextDataView.as_view(), name='save'),
    path('ApiEndpoint/', ApiEndpoint.as_view(), name='ApiEndpoint')
]