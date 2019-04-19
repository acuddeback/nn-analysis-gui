import { Component, OnInit, isDevMode } from '@angular/core';
import {
  FileUploader,
  FileSelectDirective
} from 'ng2-file-upload/ng2-file-upload';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  URL = 'http://localhost:8080/api/upload';
  name = 'Choose File';
  loading = false;

  public uploader: FileUploader;

  constructor(private router: Router) {}

  ngOnInit() {
    this.uploader = new FileUploader({
      url: this.URL,
      itemAlias: 'file'
    });
    this.uploader.onAfterAddingFile = file => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (
      item: any,
      response: any,
      status: any,
      headers: any
    ) => {
      console.log('FileUploaded:uploaded:', item, status, response);
      this.router.navigateByUrl('results');
      // alert('File uploaded successfully');
    };
  }

  onFileSelected(event) {
    console.log(event);
    this.name = event.target.files[0].name;
  }
}
