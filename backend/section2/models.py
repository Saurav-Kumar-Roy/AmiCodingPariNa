from django.db import models
from django.contrib.auth.models import User

class TextData(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"TextData for {self.user.username} at {self.created_at}"