from django.db import models


class Memo(models.Model):
    content = models.TextField()

    __str__ = lambda self: f"{self.id}: {self.content[:20]}"