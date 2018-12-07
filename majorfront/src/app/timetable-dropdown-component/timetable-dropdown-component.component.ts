import { Component, OnInit } from '@angular/core';
import { TimetabledropdownService } from '../timetabledropdown.service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-timetable-dropdown-component',
  templateUrl: './timetable-dropdown-component.component.html',
  styleUrls: ['./timetable-dropdown-component.component.scss']
})
export class TimetableDropdownComponentComponent implements OnInit {

  timetabledropdownMessage : string;

  constructor(private timetabledropdownService: TimetabledropdownService , private router: Router , private http: HttpClient) { }

  ngOnInit() {
  	this.timetabledropdownService.currentMessage.subscribe(timetabledropdownMessage => this.timetabledropdownMessage = timetabledropdownMessage);
    console.log("timetabledropdownMessage in timetable dropdown component " + this.timetabledropdownMessage);
    if(this.timetabledropdownMessage == "default message"){
    	this.router.navigate(['']);
    }
  }

}
