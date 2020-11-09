from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

User = get_user_model()

class LoginForm(forms.Form):
    username = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'UserName'}), label="Username")
    password = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Password'}))


class RegistrationForm(UserCreationForm):
    """ Extends default User Creation Form """
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'username', 'password1', 'password2')

    def clean_email(self):
        email = self.cleaned_data.get('email')
        # email validation
        return email

    def clean_username(self):
        username = self.cleaned_data.get('username')
        if username is None:
            raise forms.ValidationError('Please provide username')
        if len(username) < 5:
            raise forms.ValidationError('Username must be a last 5 characters')
        return username
