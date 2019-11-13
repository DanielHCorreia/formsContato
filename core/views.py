from django.http import HttpResponse
from django.shortcuts import render
from django.core.mail import EmailMessage


def index(request):
    return render(request, 'home.html')


def email(request):
    nome = request.POST.get('name')
    email = request.POST.get('email')
    subject= request.POST.get('subject')
    message = request.POST.get('message')

   #corpo do email
    body = f'Nome:{nome}\n Assunto: {subject}\n Email: {email}\n Mensagem: {message}'

    """ O primeiro email é o que envia e o segundo é o que recebe """
    mail = EmailMessage(subject,body,'teste.pta.citi@gmail.com',['teste.pta.citi@gmail.com'])
    result = mail.send()