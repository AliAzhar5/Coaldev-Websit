from django.db import models

class Portfolio_Projects(models.Model):
    name = models.CharField(max_length=100)
    problem = models.TextField()
    solution = models.TextField()
    industry = models.JSONField(default=list)
    technology_stack = models.JSONField(default=list)
    services = models.JSONField(default=list) 
    website_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name

class Portfolio_Images(models.Model):
    project = models.ForeignKey(Portfolio_Projects, on_delete=models.CASCADE)
    image_url = models.URLField(max_length=1000, blank=True, null=True)

    def __str__(self):
        return self.project.name

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)