from django.db import models

class Company(models.Model):
    name=models.CharField(max_length=255)
    description=models.TextField(default='')
    city=models.CharField(max_length=255)
    address=models.TextField()

    def __str__(self):
        return f'{self.id}, {self.name}'

    def to_json(self):
        return{
            'id':self.id,
            'name':self.name,
            'description':self.description,
            'city':self.city,
            'address':self.address,
        }

    class Meta:
        verbose_name="Company"
        verbose_name_plural="Companies"

class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(default='')
    salary=models.FloatField(default='')
    company=models.ForeignKey(Company, on_delete=models.CASCADE, null=True, related_name="vacancies")

    def __str__(self):
        return f'{self.id}, {self.name}'

    def to_json(self):
        return{
            'id':self.id,
            'name':self.name,
            'description':self.description,
            'salary':self.salary,
            'company': self.company.to_json(),
        }

    class Meta:
        verbose_name="Vacancy"
        verbose_name_plural="Vacancies"