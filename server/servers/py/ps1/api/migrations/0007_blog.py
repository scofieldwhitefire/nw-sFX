# Generated by Django 4.2.4 on 2023-08-26 13:37

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_faq'),
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uuid', models.UUIDField()),
                ('photo', models.ImageField(upload_to=api.models.upload_to)),
                ('tags', models.CharField(max_length=1000)),
                ('title', models.CharField(max_length=50)),
                ('message', models.CharField(max_length=10000)),
                ('img', models.ImageField(upload_to=api.models.upload_to)),
                ('author', models.CharField(max_length=50)),
                ('uploaded', models.DateTimeField()),
                ('show', models.BooleanField(default=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['-created'],
            },
        ),
    ]
