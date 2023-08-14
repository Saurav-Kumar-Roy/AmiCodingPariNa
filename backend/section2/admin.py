from django.contrib import admin
from .models import TextData
# Register your models here.
@admin.register(TextData)
class TextDataAdmin(admin.ModelAdmin):
    list_display = ['id','user','created_at','text']