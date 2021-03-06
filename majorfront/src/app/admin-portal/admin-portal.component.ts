import { Component, OnInit } from '@angular/core';
import { AdmincredentialsService } from '../admincredentials.service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TimetabledataService } from '../timetabledata.service';
import { AdminprofileService } from '../adminprofile.service';
import { TimetabledropdownService } from '../timetabledropdown.service';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.scss']
})
export class AdminPortalComponent implements OnInit {

  timetableMessage: string;
  timetabledropdownMessage : string;
  adminprofileMessage : string;
  adminMessage : string;
  selectedSlots = true;
  selectedView = true;
  selectedGenerate = true;

  facultyResponseList : any ;
  generatedfacultyResponseList : any;
  generatedSectionsList: any;

  overallTT: any;

  fetchFacultyDataUrl = "http://localhost:8080/Time_Table_Scheduler_war/fetchAllFacultyData";
  generateTimeTableUrl = "http://localhost:8080/Time_Table_Scheduler_war/generateTimeTable";
  generateTimeTableAgainUrl = "http://localhost:8080/Time_Table_Scheduler_war/generateTimeTableAgain";

  constructor( private admincredentialsService: AdmincredentialsService, private router: Router , private http: HttpClient , private timetabledataService: TimetabledataService , private adminprofileService : AdminprofileService, private timetabledropdownService: TimetabledropdownService) { }

  ngOnInit() {
  	this.admincredentialsService.currentMessage.subscribe(adminMessage => this.adminMessage = adminMessage);
    console.log("adminMessage in adminportal is " + this.adminMessage);


    this.timetabledataService.currentMessage.subscribe(timetableMessage => this.timetableMessage = timetableMessage);
    console.log("time table message in admin portal : " + this.timetableMessage);

    this.timetabledropdownService.currentMessage.subscribe(timetabledropdownMessage => this.timetabledropdownMessage = timetabledropdownMessage);
    console.log("time table dropdown message in admin portal : " + this.timetabledropdownMessage);


    if(this.timetableMessage == "updateOnBatchTimeTable"){
        this.adminMessage == "admin";
    }

    if(this.timetabledropdownMessage == "updateOnSectionTimeTable"){
        this.adminMessage == "admin";
    }

    if(this.adminMessage == "default message"){
    	this.router.navigate(['']);
    }

   

    this.adminprofileService.currentMessage.subscribe(adminprofileMessage => this.adminprofileMessage = adminprofileMessage);

    this.http.get(this.fetchFacultyDataUrl).subscribe(
    ( data : any ) => {
      console.log(data);
      this.facultyResponseList = data.fullFacultyResponseList;      
    });
  }


  convertStringToBool(val : string){
      if(val=="sam"){
        return true;
      }else {
        return false;
      }
  }
  
  UpdateTimeTableClick(val : string){
    console.log("faculty is" + val);
    this.adminprofileService.changeMessage(val);
    this.router.navigate(['profile']);

  }

  addCentralizedSlots(){
  	console.log("add slots");
  	this.selectedSlots = false;
  	this.selectedView = true;
  	this.selectedGenerate = true;
  }

  viewTimeTableClick(){
  	console.log("view");
  	this.selectedSlots = true;
  	this.selectedView = false;
  	this.selectedGenerate = true;
    this.http.get(this.fetchFacultyDataUrl).subscribe(
    ( data : any ) => {
      console.log(data);
      this.facultyResponseList = data.fullFacultyResponseList;      
    });
  }

  generateTimeTableClick(){
  	console.log("generate");
  	this.selectedSlots = true;
  	this.selectedView = true;
  	this.selectedGenerate = false;
    this.http.get(this.generateTimeTableUrl).subscribe(
    ( data : any ) => {
      console.log(data); 
      this.overallTT = data;
      this.generatedfacultyResponseList = data.facultyResponses; 
      this.generatedSectionsList =  data.sections;
      alert("Successfully Generated!");
    });

  }

  generateTimeTableAgainClick(){
    console.log("generate again");
    console.log("data being sent is : ", this.overallTT);



    this.http.post(this.generateTimeTableAgainUrl,this.overallTT)
        .subscribe(
            (data : any ) => {
                console.log("POST Request for generate time table is successful ", data);
                console.log(data);
                this.overallTT = data;
                this.generatedfacultyResponseList = data.facultyResponses;
                this.generatedSectionsList = data.sections;
                alert("Successfully Generated!");

            },
            error => {
                console.log("Error: couldn't generate again", error);
                alert("Please Try Again!");
            }
        ); 



  }

  a1Click(){
    this.timetabledataService.changeMessage("a1");
    this.router.navigate(['admin/timetable/a1']);
  }

  a2Click(){
    this.timetabledataService.changeMessage("a2");
    this.router.navigate(['admin/timetable/a2']);
  }

  a3Click(){
    this.timetabledataService.changeMessage("a3");
    this.router.navigate(['admin/timetable/a3']);
  }

  a4Click(){
    this.timetabledataService.changeMessage("a4");
    this.router.navigate(['admin/timetable/a4']);
  }

  a5Click(){
    this.timetabledataService.changeMessage("a5");
    this.router.navigate(['admin/timetable/a5']);
  }

  a6Click(){
    this.timetabledataService.changeMessage("a6");
    this.router.navigate(['admin/timetable/a6']);
  }

  a7Click(){
    this.timetabledataService.changeMessage("a7");
    this.router.navigate(['admin/timetable/a7']);
  }

  a8Click(){
    this.timetabledataService.changeMessage("a8");
    this.router.navigate(['admin/timetable/a8']);
  }

  a9Click(){
    this.timetabledataService.changeMessage("a9");
    this.router.navigate(['admin/timetable/a9']);
  }

  a10Click(){
    this.timetabledataService.changeMessage("a10");
    this.router.navigate(['admin/timetable/a10']);
  }

  a11Click(){
    this.timetabledataService.changeMessage("a11");
    this.router.navigate(['admin/timetable/a11']);
  }

  a12Click(){
    this.timetabledataService.changeMessage("a12");
    this.router.navigate(['admin/timetable/a12']);
  }

  a13Click(){
    this.timetabledataService.changeMessage("a13");
    this.router.navigate(['admin/timetable/a13']);
  }

  a14Click(){
    this.timetabledataService.changeMessage("a14");
    this.router.navigate(['admin/timetable/a14']);
  }

  a15Click(){
    this.timetabledataService.changeMessage("a15");
    this.router.navigate(['admin/timetable/a15']);
  }

  b1Click(){
    this.timetabledataService.changeMessage("b1");
    this.router.navigate(['admin/timetable/b1']);
  }

  b2Click(){
    this.timetabledataService.changeMessage("b2");
    this.router.navigate(['admin/timetable/b2']);
  }

  b3Click(){
    this.timetabledataService.changeMessage("b3");
    this.router.navigate(['admin/timetable/b3']);
  }

  b4Click(){
    this.timetabledataService.changeMessage("b4");
    this.router.navigate(['admin/timetable/b4']);
  }

  b5Click(){
    this.timetabledataService.changeMessage("b5");
    this.router.navigate(['admin/timetable/b5']);
  }

  b6Click(){
    this.timetabledataService.changeMessage("b6");
    this.router.navigate(['admin/timetable/b6']);
  }

  b7Click(){
    this.timetabledataService.changeMessage("b7");
    this.router.navigate(['admin/timetable/b7']);
  }

  b8Click(){
    this.timetabledataService.changeMessage("b8");
    this.router.navigate(['admin/timetable/b8']);
  }

  b9Click(){
    this.timetabledataService.changeMessage("b9");
    this.router.navigate(['admin/timetable/b9']);
  }

  b10Click(){
    this.timetabledataService.changeMessage("b10");
    this.router.navigate(['admin/timetable/b10']);
  }

  b11Click(){
    this.timetabledataService.changeMessage("b11");
    this.router.navigate(['admin/timetable/b11']);
  }

  b12Click(){
    this.timetabledataService.changeMessage("b12");
    this.router.navigate(['admin/timetable/b12']);
  }

  b13Click(){
    this.timetabledataService.changeMessage("b13");
    this.router.navigate(['admin/timetable/b13']);
  }

  b14Click(){
    this.timetabledataService.changeMessage("b14");
    this.router.navigate(['admin/timetable/b14']);
  }

  b15Click(){
    this.timetabledataService.changeMessage("b15");
    this.router.navigate(['admin/timetable/b15']);
  }

  s1Click(){
    this.timetabledropdownService.changeMessage("s1");
    this.router.navigate(['admin/timetabledropdown/s1']);
  }
 	
  s2Click(){
    this.timetabledropdownService.changeMessage("s2");
    this.router.navigate(['admin/timetabledropdown/s2']);
  }

  t1Click(){
    this.timetabledropdownService.changeMessage("t1");
    this.router.navigate(['admin/timetabledropdown/t1']);
  }
  
  t2Click(){
    this.timetabledropdownService.changeMessage("t2");
    this.router.navigate(['admin/timetabledropdown/t2']);
  }

  f1Click(){
    this.timetabledropdownService.changeMessage("f1");
    this.router.navigate(['admin/timetabledropdown/sf1']);
  }
  
  f2Click(){
    this.timetabledropdownService.changeMessage("f2");
    this.router.navigate(['admin/timetabledropdown/f2']);
  }

  phd1Click(){
    this.timetabledropdownService.changeMessage("phd1");
    this.router.navigate(['admin/timetabledropdown/phd1']);
  }
  

}
