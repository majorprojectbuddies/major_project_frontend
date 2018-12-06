import { Component, OnInit } from '@angular/core';
import { AdmincredentialsService } from '../admincredentials.service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.scss']
})
export class AdminPortalComponent implements OnInit {

  adminMessage : string;

  constructor( private admincredentialsService: AdmincredentialsService, private router: Router , private http: HttpClient ) { }

  ngOnInit() {
  	this.admincredentialsService.currentMessage.subscribe(adminMessage => this.adminMessage = adminMessage);
    console.log("adminMessage in adminportal is " + this.adminMessage);

    if(this.adminMessage == "default message"){
    	this.router.navigate(['']);
    }
  }

}
