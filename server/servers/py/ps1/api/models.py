from django.db import models
import uuid

# Create your models here.
T = True
F = False

def upload_to(instance, filename):
    return f'{uuid.uuid4()}.jpg'

class Plan(models.Model):
    uuid = models.UUIDField()
    plan = models.CharField(max_length=20)
    show = models.BooleanField(default=T)
    created = models.DateTimeField(auto_now_add=T)

    class Meta:
        ordering = ['-created']

    def __str__(self):
        if self.show:
            return f"{self.plan} [Active]"
        else:
            return f"{self.plan} [Not Active]"


class SubPlan(models.Model):
    uuid = models.UUIDField()
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    sub_plan = models.CharField(max_length=20)
    duration = models.IntegerField()
    multiplier = models.CharField(max_length=10, default='0.0')
    step = models.IntegerField(default=0)
    min = models.IntegerField()
    max = models.IntegerField()
    show = models.BooleanField(default=T)
    created = models.DateTimeField(auto_now_add=T)

    class Meta:
        ordering = ['-created']

    def __str__(self):
        if self.show:
            return f"{self.plan.plan} - {self.sub_plan}, ${self.min} - ${self.max}, {self.duration} Days. [Active]"
        else:
            return f"{self.plan.plan} - {self.sub_plan}, ${self.min} - ${self.max}, {self.duration} Days. [Not Active]"


class Testimonial(models.Model):
    uuid = models.UUIDField()
    name = models.CharField(max_length=50)
    message = models.CharField(max_length=5000)
    job = models.CharField(max_length=20)
    photo = models.ImageField(upload_to=upload_to)
    show = models.BooleanField(default=T)
    created = models.DateTimeField(auto_now_add=T)

    class Meta:
        ordering = ['-created']

    def __str__(self):
        if self.show:
            return f"Testimonial for {self.name} [Showing]"
        else:
            return f"Testimonial for {self.name} [Not Showing]"
        

class FaqTag(models.Model):
    uuid = models.UUIDField()
    name = models.CharField(max_length=50)
    active = models.BooleanField(default=T)
    created = models.DateTimeField(auto_now_add=T)

    class Meta:
        ordering = ['-created']

    def __str__(self):
        if self.active:
            return f"Faq Tag for {self.name} [Active]"
        else:
            return f"Faq Tag for {self.name} [Not Active]"


class FAQ(models.Model):
    uuid = models.UUIDField()
    tag = models.ForeignKey(FaqTag, on_delete=models.CASCADE, blank=T, null=T)
    question = models.CharField(max_length=50)
    answer = models.CharField(max_length=5000)
    show = models.BooleanField(default=T)
    created = models.DateTimeField(auto_now_add=T)

    class Meta:
        ordering = ['-created']

    def __str__(self):
        if self.show:
            return f"FAQ for {self.question} [Showing]"
        else:
            return f"FAQ for {self.question} [Not Showing]"



class Blog(models.Model):
    uuid = models.UUIDField()
    photo = models.ImageField(upload_to=upload_to)
    tags = models.CharField(max_length=1000)
    slug = models.SlugField()
    title = models.CharField(max_length=50)
    message = models.CharField(max_length=10000)
    img = models.ImageField(upload_to=upload_to)
    author = models.CharField(max_length=50)
    uploaded = models.DateTimeField(auto_now_add=F)
    show = models.BooleanField(default=T)
    created = models.DateTimeField(auto_now_add=T)

    class Meta:
        ordering = ['-created']

    def __str__(self):
        if self.show:
            return f"Blog {self.title} by {self.author}. [Showing]"
        else:
            return f"Blog {self.title} by {self.author}. [Not Showing]"