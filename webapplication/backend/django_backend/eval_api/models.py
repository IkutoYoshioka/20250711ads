from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class MyUserManager(BaseUserManager):
    def create_user(self, staff_code, staff_name, job_code, grade_code, password=None):
        if not staff_code:
            raise ValueError('Users must have a staff code')
        if not staff_name:
            raise ValueError('Users must have a staff name')
        if not job_code:
            raise ValueError('Users must have a job code')
        if not grade_code:
            raise ValueError('Users must have a grade code')
        
        user = self.model(
            staff_code=staff_code,
            staff_name=staff_name,
            job_code = job_code,
            grade_code = grade_code
        )
        
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, staff_code, staff_name, job_code, grade_code, password):
        user = self.create_user(
            staff_code, 
            staff_name, 
            job_code, 
            grade_code, 
            password = password
        )
        user.is_staff = True
        user.is_admin = True
        user.save(using=self._db)
        return user
        
    
    
    
class MyUser(AbstractBaseUser, PermissionsMixin):
    
    staff_code = models.IntegerField(unique=True)
    staff_name = models.CharField()
    job_code = models.IntegerField()
    grade_code = models.IntegerField()
    
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    
    objects = MyUserManager()
    
    USERNAME_FIELD = 'staff_code'
    REQUIRED_FIELDS = ['staff_name', 'job_code', 'grade_code']
    
    def __str__(self):
        return str(self.staff_code) + ' : ' + self.staff_name
        
    
