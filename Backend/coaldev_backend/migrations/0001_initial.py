# Generated by Django 5.1.5 on 2025-02-03 20:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Portfolio_Projects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('problem', models.TextField()),
                ('solution', models.TextField()),
                ('tech_stack', models.TextField()),
                ('industry', models.CharField(max_length=100)),
                ('services', models.CharField(max_length=100)),
                ('website_link', models.URLField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Portfolio_Images',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='portfolio_images/')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='coaldev_backend.portfolio_projects')),
            ],
        ),
    ]
