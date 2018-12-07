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
  getTTURL = "";
  getPHDTTURL = "http://localhost:8080/Time_Table_Scheduler_war/phdBatch";
  getSectionTTURL = "http://localhost:8080/Time_Table_Scheduler_war/sectionBatch";
  updateUrl = "";
  updatePHDUrl = "http://localhost:8080/Time_Table_Scheduler_war/updatePhdBatch";
  updateSectionUrl = "http://localhost:8080/Time_Table_Scheduler_war/updateSectionBatch";

  dataToSend : any ;

  courseList = [
    { courseId : "-", courseName : "-"},
  	{ courseId : "MC310(Slot-A)", courseName : "Software Engineering (Slot-A)"},
  	{ courseId : "MC310(Slot-C)", courseName : "Software Engineering (Slot-C)"},
    { courseId : "MC320(Slot-B)", courseName : "Web Technology (Slot-B)"},
    { courseId : "MC320(Slot-D)", courseName : "Web Technology (Slot-D)"},
    { courseId : "AM501", courseName : "Introduction to Mathematical Software"}
  ];

  val00 = "-";
  val01 = "-";
  val02 = "-";
  val03 = "-";
  val04 = "-";
  val05 = "-";
  val06 = "-";
  val07 = "-";
  val08 = "-";
  val09 = "-";

  val10 = "-";
  val11 = "-";
  val12 = "-";
  val13 = "-";
  val14 = "-";
  val15 = "-";
  val16 = "-";
  val17 = "-";
  val18 = "-";
  val19 = "-";

  val20 = "-";
  val21 = "-";
  val22 = "-";
  val23 = "-";
  val24 = "-";
  val25 = "-";
  val26 = "-";
  val27 = "-";
  val28 = "-";
  val29 = "-";

  val30 = "-";
  val31 = "-";
  val32 = "-";
  val33 = "-";
  val34 = "-";
  val35 = "-";
  val36 = "-";
  val37 = "-";
  val38 = "-";
  val39 = "-";

  val40 = "-";
  val41 = "-";
  val42 = "-";
  val43 = "-";
  val44 = "-";
  val45 = "-";
  val46 = "-";
  val47 = "-";
  val48 = "-";
  val49 = "-";

  constructor(private timetabledropdownService: TimetabledropdownService , private router: Router , private http: HttpClient) { }

  ngOnInit() {
  	this.timetabledropdownService.currentMessage.subscribe(timetabledropdownMessage => this.timetabledropdownMessage = timetabledropdownMessage);
    console.log("timetabledropdownMessage in timetable dropdown component " + this.timetabledropdownMessage);
    if(this.timetabledropdownMessage == "default message"){
    	this.router.navigate(['']);
    }
    if(this.timetabledropdownMessage == "phd1"){
    	this.getTTURL = this.getPHDTTURL;
    }else {
    	this.getTTURL = this.getSectionTTURL;
    }
    console.log(this.getTTURL,this.timetabledropdownMessage);
    this.http.post(this.getTTURL,{ groupid : this.timetabledropdownMessage})
        .subscribe(
            (data : any ) => {
                console.log("POST Request for getting tt is successful sameer", data);
                console.log(data);
                console.log(this.getTTURL);
                this.dataToSend = data;
                this.val00 = this.convertStringToCourse(data.timeTable.timetable[0][0]);
                this.val01 = this.convertStringToCourse(data.timeTable.timetable[0][1]);
                this.val02 = this.convertStringToCourse(data.timeTable.timetable[0][2]);
                this.val03 = this.convertStringToCourse(data.timeTable.timetable[0][3]);
                this.val04 = this.convertStringToCourse(data.timeTable.timetable[0][4]);
                this.val05 = this.convertStringToCourse(data.timeTable.timetable[0][5]);
                this.val06 = this.convertStringToCourse(data.timeTable.timetable[0][6]);
                this.val07 = this.convertStringToCourse(data.timeTable.timetable[0][7]);
                this.val08 = this.convertStringToCourse(data.timeTable.timetable[0][8]);
                this.val09 = this.convertStringToCourse(data.timeTable.timetable[0][9]);

                this.val10 = this.convertStringToCourse(data.timeTable.timetable[1][0]);
                this.val11 = this.convertStringToCourse(data.timeTable.timetable[1][1]);
                this.val12 = this.convertStringToCourse(data.timeTable.timetable[1][2]);
                this.val13 = this.convertStringToCourse(data.timeTable.timetable[1][3]);
                this.val14 = this.convertStringToCourse(data.timeTable.timetable[1][4]);
                this.val15 = this.convertStringToCourse(data.timeTable.timetable[1][5]);
                this.val16 = this.convertStringToCourse(data.timeTable.timetable[1][6]);
                this.val17 = this.convertStringToCourse(data.timeTable.timetable[1][7]);
                this.val18 = this.convertStringToCourse(data.timeTable.timetable[1][8]);
                this.val19 = this.convertStringToCourse(data.timeTable.timetable[1][9]);

                this.val20 = this.convertStringToCourse(data.timeTable.timetable[2][0]);
                this.val21 = this.convertStringToCourse(data.timeTable.timetable[2][1]);
                this.val22 = this.convertStringToCourse(data.timeTable.timetable[2][2]);
                this.val23 = this.convertStringToCourse(data.timeTable.timetable[2][3]);
                this.val24 = this.convertStringToCourse(data.timeTable.timetable[2][4]);
                this.val25 = this.convertStringToCourse(data.timeTable.timetable[2][5]);
                this.val26 = this.convertStringToCourse(data.timeTable.timetable[2][6]);
                this.val27 = this.convertStringToCourse(data.timeTable.timetable[2][7]);
                this.val28 = this.convertStringToCourse(data.timeTable.timetable[2][8]);
                this.val29 = this.convertStringToCourse(data.timeTable.timetable[2][9]);

                this.val30 = this.convertStringToCourse(data.timeTable.timetable[3][0]);
                this.val31 = this.convertStringToCourse(data.timeTable.timetable[3][1]);
                this.val32 = this.convertStringToCourse(data.timeTable.timetable[3][2]);
                this.val33 = this.convertStringToCourse(data.timeTable.timetable[3][3]);
                this.val34 = this.convertStringToCourse(data.timeTable.timetable[3][4]);
                this.val35 = this.convertStringToCourse(data.timeTable.timetable[3][5]);
                this.val36 = this.convertStringToCourse(data.timeTable.timetable[3][6]);
                this.val37 = this.convertStringToCourse(data.timeTable.timetable[3][7]);
                this.val38 = this.convertStringToCourse(data.timeTable.timetable[3][8]);
                this.val39 = this.convertStringToCourse(data.timeTable.timetable[3][9]);

                this.val40 = this.convertStringToCourse(data.timeTable.timetable[4][0]);
                this.val41 = this.convertStringToCourse(data.timeTable.timetable[4][1]);
                this.val42 = this.convertStringToCourse(data.timeTable.timetable[4][2]);
                this.val43 = this.convertStringToCourse(data.timeTable.timetable[4][3]);
                this.val44 = this.convertStringToCourse(data.timeTable.timetable[4][4]);
                this.val45 = this.convertStringToCourse(data.timeTable.timetable[4][5]);
                this.val46 = this.convertStringToCourse(data.timeTable.timetable[4][6]);
                this.val47 = this.convertStringToCourse(data.timeTable.timetable[4][7]);
                this.val48 = this.convertStringToCourse(data.timeTable.timetable[4][8]);
                this.val49 = this.convertStringToCourse(data.timeTable.timetable[4][9]);
            },
            error => {
                console.log("Error", error);
            }
        ); 
  }

   convertStringToCourse(val : string){
      if(val=="null"){
        return "-";
      }else {
        return val;
      }
  }

  convertDashToNull(val : string){
    if(val=="-"){
      return "null";
    }else {
      return val;
    }
  }

  onUpdateClick(){
  	console.log("update clicked");

    console.log(this.dataToSend);
        this.dataToSend.timeTable.timetable[0][0] = this.convertDashToNull(this.val00);
        this.dataToSend.timeTable.timetable[0][1] = this.convertDashToNull(this.val01);
        this.dataToSend.timeTable.timetable[0][2] = this.convertDashToNull(this.val02);
        this.dataToSend.timeTable.timetable[0][3] = this.convertDashToNull(this.val03);
        this.dataToSend.timeTable.timetable[0][4] = this.convertDashToNull(this.val04);
        this.dataToSend.timeTable.timetable[0][5] = this.convertDashToNull(this.val05);
        this.dataToSend.timeTable.timetable[0][6] = this.convertDashToNull(this.val06);
        this.dataToSend.timeTable.timetable[0][7] = this.convertDashToNull(this.val07);
        this.dataToSend.timeTable.timetable[0][8] = this.convertDashToNull(this.val08);
        this.dataToSend.timeTable.timetable[0][9] = this.convertDashToNull(this.val09);

        this.dataToSend.timeTable.timetable[1][0] = this.convertDashToNull(this.val10);
        this.dataToSend.timeTable.timetable[1][1] = this.convertDashToNull(this.val11);
        this.dataToSend.timeTable.timetable[1][2] = this.convertDashToNull(this.val12);
        this.dataToSend.timeTable.timetable[1][3] = this.convertDashToNull(this.val13);
        this.dataToSend.timeTable.timetable[1][4] = this.convertDashToNull(this.val14);
        this.dataToSend.timeTable.timetable[1][5] = this.convertDashToNull(this.val15);
        this.dataToSend.timeTable.timetable[1][6] = this.convertDashToNull(this.val16);
        this.dataToSend.timeTable.timetable[1][7] = this.convertDashToNull(this.val17);
        this.dataToSend.timeTable.timetable[1][8] = this.convertDashToNull(this.val18);
        this.dataToSend.timeTable.timetable[1][9] = this.convertDashToNull(this.val19);

        this.dataToSend.timeTable.timetable[2][0] = this.convertDashToNull(this.val20);
        this.dataToSend.timeTable.timetable[2][1] = this.convertDashToNull(this.val21);
        this.dataToSend.timeTable.timetable[2][2] = this.convertDashToNull(this.val22);
        this.dataToSend.timeTable.timetable[2][3] = this.convertDashToNull(this.val23);
        this.dataToSend.timeTable.timetable[2][4] = this.convertDashToNull(this.val24);
        this.dataToSend.timeTable.timetable[2][5] = this.convertDashToNull(this.val25);
        this.dataToSend.timeTable.timetable[2][6] = this.convertDashToNull(this.val26);
        this.dataToSend.timeTable.timetable[2][7] = this.convertDashToNull(this.val27);
        this.dataToSend.timeTable.timetable[2][8] = this.convertDashToNull(this.val28);
        this.dataToSend.timeTable.timetable[2][9] = this.convertDashToNull(this.val29);

        this.dataToSend.timeTable.timetable[3][0] = this.convertDashToNull(this.val30);
        this.dataToSend.timeTable.timetable[3][1] = this.convertDashToNull(this.val31);
        this.dataToSend.timeTable.timetable[3][2] = this.convertDashToNull(this.val32);
        this.dataToSend.timeTable.timetable[3][3] = this.convertDashToNull(this.val33);
        this.dataToSend.timeTable.timetable[3][4] = this.convertDashToNull(this.val34);
        this.dataToSend.timeTable.timetable[3][5] = this.convertDashToNull(this.val35);
        this.dataToSend.timeTable.timetable[3][6] = this.convertDashToNull(this.val36);
        this.dataToSend.timeTable.timetable[3][7] = this.convertDashToNull(this.val37);
        this.dataToSend.timeTable.timetable[3][8] = this.convertDashToNull(this.val38);
        this.dataToSend.timeTable.timetable[3][9] = this.convertDashToNull(this.val39);

        this.dataToSend.timeTable.timetable[4][0] = this.convertDashToNull(this.val40);
        this.dataToSend.timeTable.timetable[4][1] = this.convertDashToNull(this.val41);
        this.dataToSend.timeTable.timetable[4][2] = this.convertDashToNull(this.val42);
        this.dataToSend.timeTable.timetable[4][3] = this.convertDashToNull(this.val43);
        this.dataToSend.timeTable.timetable[4][4] = this.convertDashToNull(this.val44);
        this.dataToSend.timeTable.timetable[4][5] = this.convertDashToNull(this.val45);
        this.dataToSend.timeTable.timetable[4][6] = this.convertDashToNull(this.val46);
        this.dataToSend.timeTable.timetable[4][7] = this.convertDashToNull(this.val47);
        this.dataToSend.timeTable.timetable[4][8] = this.convertDashToNull(this.val48);
        this.dataToSend.timeTable.timetable[4][9] = this.convertDashToNull(this.val49);
        console.log("i am sending this data",this.dataToSend);
        if(this.timetabledropdownMessage == "phd1"){
        	this.updateUrl = this.updatePHDUrl;
        }else {
        	this.updateUrl = this.updateSectionUrl;
        }
        this.http.post(this.updateUrl,this.dataToSend)
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

  	this.timetabledropdownService.changeMessage("updateOnSectionTimeTable");
  	this.router.navigate(['admin']);
  }

}
