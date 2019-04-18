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
  URL = 'http://localhost:36989/api/upload';
  name = 'Choose File';
  loading = false;

  public uploader: FileUploader;

  constructor(private router: Router) {}

  ngOnInit() {
    if (isDevMode()) {
      this.URL = 'http://localhost:36989/api/upload';
    } else {
      this.URL = 'http://ec2-3-83-213-235.compute-1.amazonaws.com:36989/api/upload';
    }
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
