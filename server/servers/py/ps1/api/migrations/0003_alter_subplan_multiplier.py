# Generated by Django 4.2.4 on 2023-08-26 08:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_subplan_multiplier'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subplan',
            name='multiplier',
            field=models.CharField(default='0.0', max_length=10),
        ),
    ]
