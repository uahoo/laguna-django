from django.core.exceptions import ValidationError
from django.db import models


# Create your models here.

class Named(models.Model):
    class Meta:
        abstract = True

    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


def not_negative(price, phone_number: float):
    if price or phone_number < 0:
        raise ValidationError('It must be positive')


class Users(Named):
    id = models.IntegerField(primary_key=True)
    surname = models.CharField(max_length=50)
    login = models.CharField(max_length=50, default='нет')
    password = models.CharField(max_length=20, default='нет')
    email = models.EmailField(max_length=50, default='нет')
    phone_number = models.IntegerField(validators=[not_negative])
    role = models.CharField(max_length=10, default='user')
    benefit = models.IntegerField(default=0)
    activated = models.IntegerField(default=0)


class News(models.Model):
    id = models.IntegerField(primary_key=True)
    header = models.CharField(max_length=100)
    text = models.CharField(max_length=1000)
    date = models.DateField()
    type = models.CharField(max_length=10)


class Photos(Named):
    id = models.IntegerField(primary_key=True)
    photo = models.BinaryField
    type = models.CharField(max_length=50)
    news_id = models.IntegerField
    fk_photos_to_news = models.ForeignKey(News, on_delete=models.CASCADE)


class Gallery(Named):
    id = models.IntegerField(primary_key=True)
    photo = models.BinaryField
