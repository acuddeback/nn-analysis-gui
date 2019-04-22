from django.shortcuts import render
from django.http import HttpResponse
from .forms import UploadFileForm

import subprocess

# Create your views here.

def index(request):
    return HttpResponse("Hello, world. You're at the file upload index.")



def home(request):
    form = UploadFileForm()
    return render(request, 'index.block.html', {'form': form})

def upload_file(request):
  return HttpResponse("You tried to upload a file.")
    # if request.method == 'POST':
    #     form = UploadFileForm(request.POST, request.FILES)
    #     if form.is_valid():
    #         # handle_uploaded_file(request.FILES['file'])
    #         return HttpResponseRedirect('/success/url/')
    # else:
    #     form = UploadFileForm()
    # return render(request, 'index.block.html', {'form': form})
  
def runscript(request):
  form = UploadFileForm()
  subprocess.call (["/usr/bin/Rscript --vanilla file_upload/app-scripts/analysis.r file_upload/app-scripts/example.txt"], shell=True)
  return render(request, 'index.block.html', {'form': form})