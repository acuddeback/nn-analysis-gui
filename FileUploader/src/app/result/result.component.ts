import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  public resultsData = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http
      .get('assets/result_file.txt', { responseType: 'text' })
      .subscribe(data => {
        console.log(data);
        this.resultsData = data;
      });
  }

  homeClick() {
    this.router.navigateByUrl('home');
  }
}
