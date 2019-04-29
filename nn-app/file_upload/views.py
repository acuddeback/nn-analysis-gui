from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from .forms import UploadFileForm
from django.urls import reverse

import subprocess

# Create your views here.

def handle_uploaded_file(f):
    with open('file_upload/app-scripts/input.txt', 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)

def index(request):
    return HttpResponse("Hello, world. You're at the file upload index.")

def home(request):
    form = UploadFileForm()
    return render(request, 'index.block.html', {'form': form})

def upload_file(request):
  if request.method == 'POST':
      form = UploadFileForm(request.POST, request.FILES)
      print(request.POST)
      print(form.is_valid())
      if(form.is_valid()):
          handle_uploaded_file(request.FILES['file'])
          return HttpResponseRedirect('/runscript/')
  else:
      form = UploadFileForm()
  return HttpResponseRedirect(reverse('home'))
  
def runscript(request):
  form = UploadFileForm()
  subprocess.call (["/usr/bin/Rscript --vanilla file_upload/app-scripts/analysis.r file_upload/app-scripts/input.txt"], shell=True)
  return render(request, 'results.block.html')

def results(request):
  open('file_upload/app-scripts/input.txt', 'w').close()
  return render(request, 'results.block.html')