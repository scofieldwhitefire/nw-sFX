# Generated by Django 4.2.4 on 2023-08-26 08:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_subplan_multiplier'),
    ]

    operations = [
        migrations.AddField(
            model_name='subplan',
            name='step',
            field=models.IntegerField(default=0),
        ),
    ]