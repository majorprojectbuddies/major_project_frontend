import { Component, OnInit } from '@angular/core';
import { LogincredentialsService } from '../logincredentials.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  message:string;
  constructor( private logincredentialsService: LogincredentialsService , private router: Router ) { }

  ngOnInit() {
    this.logincredentialsService.currentMessage.subscribe(message => this.message = message);
    console.log("message in profile " + this.message);
    if(this.message == "default message"){
    	this.router.navigate(['']);
    }
  }

}
