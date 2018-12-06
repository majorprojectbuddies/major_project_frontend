import { Component, OnInit } from '@angular/core';
import { LogincredentialsService } from '../logincredentials.service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AdmincredentialsService } from '../admincredentials.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  updateUrl = "http://localhost:8080/Time_Table_Scheduler_war/updateProfile";
  message:string;
  facultyName: string;
  dataToSend : any ;
  fetchDataUrl = "http://localhost:8080/Time_Table_Scheduler_war/profile";
  timeTable : string [][];


  val00 = false;
  val01 = false;
  val02 = false;
  val03 = false;
  val04 = false;
  val05 = false;
  val06 = false;
  val07 = false;
  val08 = false;
  val09 = false;

  val10 = false;
  val11 = false;
  val12 = false;
  val13 = false;
  val14 = false;
  val15 = false;
  val16 = false;
  val17 = false;
  val18 = false;
  val19 = false;

  val20 = false;
  val21 = false;
  val22 = false;
  val23 = false;
  val24 = false;
  val25 = false;
  val26 = false;
  val27 = false;
  val28 = false;
  val29 = false;

  val30 = false;
  val31 = false;
  val32 = false;
  val33 = false;
  val34 = false;
  val35 = false;
  val36 = false;
  val37 = false;
  val38 = false;
  val39 = false;

  val40 = false;
  val41 = false;
  val42 = false;
  val43 = false;
  val44 = false;
  val45 = false;
  val46 = false;
  val47 = false;
  val48 = false;
  val49 = false;


  hours = [
    { value : 6 },
    { value : 8 },
    { value : 10 },
    { value : 12 },
    { value : 14 },
    { value : 16 },
  ];

  designations = [
    { id: 'Professor', text: 'Professor' },
    { id: 'Associate Professor', text: 'Associate Professor' },
    { id: 'Assistant Professor', text: 'Assistant Professor' },
    { id: 'Research Scholar', text: 'Research Scholar' },
    { id: 'Guest Faculty' , text: 'Guest Faculty' },
    { id: 'UGC Prof', text: 'UGC Prof' }
  ];

  courseList: any [];

  selectedDesignation = null;
  selectedHours = 0;
  selectedCourse1 = null;
  selectedCourse2 = null;
  selectedCourse3 = null;


  constructor( private logincredentialsService: LogincredentialsService , private admincredentialsService : AdmincredentialsService, private router: Router , private http: HttpClient) { }

  adminMessage : string;
  ngOnInit() {
    this.admincredentialsService.currentMessage.subscribe(adminMessage => this.adminMessage = adminMessage);
    console.log("adminMessage in login " + this.adminMessage);
    this.logincredentialsService.currentMessage.subscribe(message => this.message = message);
    console.log("message in profile " + this.message);
    if(this.message == "default message"){
    	this.router.navigate(['']);
    }
    if(this.message == "admin"){
      this.admincredentialsService.changeMessage(this.message);
      console.log("adminmessaage is : " + this.adminMessage);
      this.router.navigate(['admin']);
    }

    this.http.post(this.fetchDataUrl,
        {
            "loginid": this.message,
        })
        .subscribe(
            ( data : any ) => {
                console.log("POST Request is successful ", data);
                this.dataToSend = data;
                this.courseList = data.courseResponse.courseList;
                this.timeTable = data.facultyResponse.timeTable.timetable;
                this.facultyName = this.dataToSend.facultyResponse.name;
                this.selectedDesignation = this.dataToSend.facultyResponse.designation ;
                this.selectedHours = this.dataToSend.facultyResponse.noOfHours;
                this.selectedCourse1 = this.dataToSend.facultyResponse.subject1;
                this.selectedCourse2 = this.dataToSend.facultyResponse.subject2;
                this.selectedCourse3 = this.dataToSend.facultyResponse.subject3;

                this.val00 = this.convertStringToBool(this.timeTable[0][0]);
                this.val01 = this.convertStringToBool(this.timeTable[0][1]);
                this.val02 = this.convertStringToBool(this.timeTable[0][2]);
                this.val03 = this.convertStringToBool(this.timeTable[0][3]);
                this.val04 = this.convertStringToBool(this.timeTable[0][4]);
                this.val05 = this.convertStringToBool(this.timeTable[0][5]);
                this.val06 = this.convertStringToBool(this.timeTable[0][6]);
                this.val07 = this.convertStringToBool(this.timeTable[0][7]);
                this.val08 = this.convertStringToBool(this.timeTable[0][8]);
                this.val09 = this.convertStringToBool(this.timeTable[0][9]);

                this.val10 = this.convertStringToBool(this.timeTable[1][0]);
                this.val11 = this.convertStringToBool(this.timeTable[1][1]);
                this.val12 = this.convertStringToBool(this.timeTable[1][2]);
                this.val13 = this.convertStringToBool(this.timeTable[1][3]);
                this.val14 = this.convertStringToBool(this.timeTable[1][4]);
                this.val15 = this.convertStringToBool(this.timeTable[1][5]);
                this.val16 = this.convertStringToBool(this.timeTable[1][6]);
                this.val17 = this.convertStringToBool(this.timeTable[1][7]);
                this.val18 = this.convertStringToBool(this.timeTable[1][8]);
                this.val19 = this.convertStringToBool(this.timeTable[1][9]);

                this.val20 = this.convertStringToBool(this.timeTable[2][0]);
                this.val21 = this.convertStringToBool(this.timeTable[2][1]);
                this.val22 = this.convertStringToBool(this.timeTable[2][2]);
                this.val23 = this.convertStringToBool(this.timeTable[2][3]);
                this.val24 = this.convertStringToBool(this.timeTable[2][4]);
                this.val25 = this.convertStringToBool(this.timeTable[2][5]);
                this.val26 = this.convertStringToBool(this.timeTable[2][6]);
                this.val27 = this.convertStringToBool(this.timeTable[2][7]);
                this.val28 = this.convertStringToBool(this.timeTable[2][8]);
                this.val29 = this.convertStringToBool(this.timeTable[2][9]);

                this.val30 = this.convertStringToBool(this.timeTable[3][0]);
                this.val31 = this.convertStringToBool(this.timeTable[3][1]);
                this.val32 = this.convertStringToBool(this.timeTable[3][2]);
                this.val33 = this.convertStringToBool(this.timeTable[3][3]);
                this.val34 = this.convertStringToBool(this.timeTable[3][4]);
                this.val35 = this.convertStringToBool(this.timeTable[3][5]);
                this.val36 = this.convertStringToBool(this.timeTable[3][6]);
                this.val37 = this.convertStringToBool(this.timeTable[3][7]);
                this.val38 = this.convertStringToBool(this.timeTable[3][8]);
                this.val39 = this.convertStringToBool(this.timeTable[3][9]);

                this.val40 = this.convertStringToBool(this.timeTable[4][0]);
                this.val41 = this.convertStringToBool(this.timeTable[4][1]);
                this.val42 = this.convertStringToBool(this.timeTable[4][2]);
                this.val43 = this.convertStringToBool(this.timeTable[4][3]);
                this.val44 = this.convertStringToBool(this.timeTable[4][4]);
                this.val45 = this.convertStringToBool(this.timeTable[4][5]);
                this.val46 = this.convertStringToBool(this.timeTable[4][6]);
                this.val47 = this.convertStringToBool(this.timeTable[4][7]);
                this.val48 = this.convertStringToBool(this.timeTable[4][8]);
                this.val49 = this.convertStringToBool(this.timeTable[4][9]);
            },
            error => {
                console.log("Error", error);
            }
        ); 

  }

  convertStringToBool(val : string){
      if(val=="null"){
        return false;
      }else {
        return true;
      }
  }

  convertNullTo0(val : boolean){
    if(val==true){
      return "0";
    }else {
      return "null";
    }
  }

  onUpdateClick(){
    console.log("update clicked");
    console.log(this.dataToSend);
    this.dataToSend.facultyResponse.designation = this.selectedDesignation;
    this.dataToSend.facultyResponse.noOfHours = this.selectedHours;
    this.dataToSend.facultyResponse.subject1 = this.selectedCourse1;
    this.dataToSend.facultyResponse.subject2 = this.selectedCourse2;
    this.dataToSend.facultyResponse.subject3 = this.selectedCourse3;
    this.dataToSend.facultyResponse.name = this.facultyName;

        this.dataToSend.facultyResponse.timeTable.timetable[0][0] = this.convertNullTo0(this.val00);
        this.dataToSend.facultyResponse.timeTable.timetable[0][1] = this.convertNullTo0(this.val01);
        this.dataToSend.facultyResponse.timeTable.timetable[0][2] = this.convertNullTo0(this.val02);
        this.dataToSend.facultyResponse.timeTable.timetable[0][3] = this.convertNullTo0(this.val03);
        this.dataToSend.facultyResponse.timeTable.timetable[0][4] = this.convertNullTo0(this.val04);
        this.dataToSend.facultyResponse.timeTable.timetable[0][5] = this.convertNullTo0(this.val05);
        this.dataToSend.facultyResponse.timeTable.timetable[0][6] = this.convertNullTo0(this.val06);
        this.dataToSend.facultyResponse.timeTable.timetable[0][7] = this.convertNullTo0(this.val07);
        this.dataToSend.facultyResponse.timeTable.timetable[0][8] = this.convertNullTo0(this.val08);
        this.dataToSend.facultyResponse.timeTable.timetable[0][9] = this.convertNullTo0(this.val09);

        this.dataToSend.facultyResponse.timeTable.timetable[1][0] = this.convertNullTo0(this.val10);
        this.dataToSend.facultyResponse.timeTable.timetable[1][1] = this.convertNullTo0(this.val11);
        this.dataToSend.facultyResponse.timeTable.timetable[1][2] = this.convertNullTo0(this.val12);
        this.dataToSend.facultyResponse.timeTable.timetable[1][3] = this.convertNullTo0(this.val13);
        this.dataToSend.facultyResponse.timeTable.timetable[1][4] = this.convertNullTo0(this.val14);
        this.dataToSend.facultyResponse.timeTable.timetable[1][5] = this.convertNullTo0(this.val15);
        this.dataToSend.facultyResponse.timeTable.timetable[1][6] = this.convertNullTo0(this.val16);
        this.dataToSend.facultyResponse.timeTable.timetable[1][7] = this.convertNullTo0(this.val17);
        this.dataToSend.facultyResponse.timeTable.timetable[1][8] = this.convertNullTo0(this.val18);
        this.dataToSend.facultyResponse.timeTable.timetable[1][9] = this.convertNullTo0(this.val19);

        this.dataToSend.facultyResponse.timeTable.timetable[2][0] = this.convertNullTo0(this.val20);
        this.dataToSend.facultyResponse.timeTable.timetable[2][1] = this.convertNullTo0(this.val21);
        this.dataToSend.facultyResponse.timeTable.timetable[2][2] = this.convertNullTo0(this.val22);
        this.dataToSend.facultyResponse.timeTable.timetable[2][3] = this.convertNullTo0(this.val23);
        this.dataToSend.facultyResponse.timeTable.timetable[2][4] = this.convertNullTo0(this.val24);
        this.dataToSend.facultyResponse.timeTable.timetable[2][5] = this.convertNullTo0(this.val25);
        this.dataToSend.facultyResponse.timeTable.timetable[2][6] = this.convertNullTo0(this.val26);
        this.dataToSend.facultyResponse.timeTable.timetable[2][7] = this.convertNullTo0(this.val27);
        this.dataToSend.facultyResponse.timeTable.timetable[2][8] = this.convertNullTo0(this.val28);
        this.dataToSend.facultyResponse.timeTable.timetable[2][9] = this.convertNullTo0(this.val29);

        this.dataToSend.facultyResponse.timeTable.timetable[3][0] = this.convertNullTo0(this.val30);
        this.dataToSend.facultyResponse.timeTable.timetable[3][1] = this.convertNullTo0(this.val31);
        this.dataToSend.facultyResponse.timeTable.timetable[3][2] = this.convertNullTo0(this.val32);
        this.dataToSend.facultyResponse.timeTable.timetable[3][3] = this.convertNullTo0(this.val33);
        this.dataToSend.facultyResponse.timeTable.timetable[3][4] = this.convertNullTo0(this.val34);
        this.dataToSend.facultyResponse.timeTable.timetable[3][5] = this.convertNullTo0(this.val35);
        this.dataToSend.facultyResponse.timeTable.timetable[3][6] = this.convertNullTo0(this.val36);
        this.dataToSend.facultyResponse.timeTable.timetable[3][7] = this.convertNullTo0(this.val37);
        this.dataToSend.facultyResponse.timeTable.timetable[3][8] = this.convertNullTo0(this.val38);
        this.dataToSend.facultyResponse.timeTable.timetable[3][9] = this.convertNullTo0(this.val39);

        this.dataToSend.facultyResponse.timeTable.timetable[4][0] = this.convertNullTo0(this.val40);
        this.dataToSend.facultyResponse.timeTable.timetable[4][1] = this.convertNullTo0(this.val41);
        this.dataToSend.facultyResponse.timeTable.timetable[4][2] = this.convertNullTo0(this.val42);
        this.dataToSend.facultyResponse.timeTable.timetable[4][3] = this.convertNullTo0(this.val43);
        this.dataToSend.facultyResponse.timeTable.timetable[4][4] = this.convertNullTo0(this.val44);
        this.dataToSend.facultyResponse.timeTable.timetable[4][5] = this.convertNullTo0(this.val45);
        this.dataToSend.facultyResponse.timeTable.timetable[4][6] = this.convertNullTo0(this.val46);
        this.dataToSend.facultyResponse.timeTable.timetable[4][7] = this.convertNullTo0(this.val47);
        this.dataToSend.facultyResponse.timeTable.timetable[4][8] = this.convertNullTo0(this.val48);
        this.dataToSend.facultyResponse.timeTable.timetable[4][9] = this.convertNullTo0(this.val49);

        console.log("data sent is : ");
        console.log(this.dataToSend.facultyResponse);
        this.http.post(this.updateUrl,this.dataToSend.facultyResponse)
        .subscribe(
            (data : any ) => {
                console.log("POST Request for update is successful ", data);
                console.log(data);
                alert("Data Updated!");
            },
            error => {
                console.log("Error", error);
            }
        ); 

  }

}
