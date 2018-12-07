import { Component, OnInit } from '@angular/core';
import { TimetabledataService } from '../timetabledata.service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  timetableMessage : string;
  getFirstYearTTURL = "http://localhost:8080/Time_Table_Scheduler_war/batch";
  updateUrl = "http://localhost:8080/Time_Table_Scheduler_war/updateBatch";
  
  dataToSend : any ;


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

  constructor(private timetabledataService: TimetabledataService , private router: Router , private http: HttpClient) { }

  ngOnInit() {
   	this.timetabledataService.currentMessage.subscribe(timetableMessage => this.timetableMessage = timetableMessage);
    console.log("timetableMessage in timetable component " + this.timetableMessage);
    if(this.timetableMessage == "default message"){
    	this.router.navigate(['']);
    }

    this.http.post(this.getFirstYearTTURL,{ groupid : this.timetableMessage})
        .subscribe(
            (data : any ) => {
                console.log("POST Request for getting tt is successful ", data);
                console.log(data);
                this.dataToSend = data;
                this.val00 = this.convertStringToBool(data.timeTable.timetable[0][0]);
                this.val01 = this.convertStringToBool(data.timeTable.timetable[0][1]);
                this.val02 = this.convertStringToBool(data.timeTable.timetable[0][2]);
                this.val03 = this.convertStringToBool(data.timeTable.timetable[0][3]);
                this.val04 = this.convertStringToBool(data.timeTable.timetable[0][4]);
                this.val05 = this.convertStringToBool(data.timeTable.timetable[0][5]);
                this.val06 = this.convertStringToBool(data.timeTable.timetable[0][6]);
                this.val07 = this.convertStringToBool(data.timeTable.timetable[0][7]);
                this.val08 = this.convertStringToBool(data.timeTable.timetable[0][8]);
                this.val09 = this.convertStringToBool(data.timeTable.timetable[0][9]);

                this.val10 = this.convertStringToBool(data.timeTable.timetable[1][0]);
                this.val11 = this.convertStringToBool(data.timeTable.timetable[1][1]);
                this.val12 = this.convertStringToBool(data.timeTable.timetable[1][2]);
                this.val13 = this.convertStringToBool(data.timeTable.timetable[1][3]);
                this.val14 = this.convertStringToBool(data.timeTable.timetable[1][4]);
                this.val15 = this.convertStringToBool(data.timeTable.timetable[1][5]);
                this.val16 = this.convertStringToBool(data.timeTable.timetable[1][6]);
                this.val17 = this.convertStringToBool(data.timeTable.timetable[1][7]);
                this.val18 = this.convertStringToBool(data.timeTable.timetable[1][8]);
                this.val19 = this.convertStringToBool(data.timeTable.timetable[1][9]);

                this.val20 = this.convertStringToBool(data.timeTable.timetable[2][0]);
                this.val21 = this.convertStringToBool(data.timeTable.timetable[2][1]);
                this.val22 = this.convertStringToBool(data.timeTable.timetable[2][2]);
                this.val23 = this.convertStringToBool(data.timeTable.timetable[2][3]);
                this.val24 = this.convertStringToBool(data.timeTable.timetable[2][4]);
                this.val25 = this.convertStringToBool(data.timeTable.timetable[2][5]);
                this.val26 = this.convertStringToBool(data.timeTable.timetable[2][6]);
                this.val27 = this.convertStringToBool(data.timeTable.timetable[2][7]);
                this.val28 = this.convertStringToBool(data.timeTable.timetable[2][8]);
                this.val29 = this.convertStringToBool(data.timeTable.timetable[2][9]);

                this.val30 = this.convertStringToBool(data.timeTable.timetable[3][0]);
                this.val31 = this.convertStringToBool(data.timeTable.timetable[3][1]);
                this.val32 = this.convertStringToBool(data.timeTable.timetable[3][2]);
                this.val33 = this.convertStringToBool(data.timeTable.timetable[3][3]);
                this.val34 = this.convertStringToBool(data.timeTable.timetable[3][4]);
                this.val35 = this.convertStringToBool(data.timeTable.timetable[3][5]);
                this.val36 = this.convertStringToBool(data.timeTable.timetable[3][6]);
                this.val37 = this.convertStringToBool(data.timeTable.timetable[3][7]);
                this.val38 = this.convertStringToBool(data.timeTable.timetable[3][8]);
                this.val39 = this.convertStringToBool(data.timeTable.timetable[3][9]);

                this.val40 = this.convertStringToBool(data.timeTable.timetable[4][0]);
                this.val41 = this.convertStringToBool(data.timeTable.timetable[4][1]);
                this.val42 = this.convertStringToBool(data.timeTable.timetable[4][2]);
                this.val43 = this.convertStringToBool(data.timeTable.timetable[4][3]);
                this.val44 = this.convertStringToBool(data.timeTable.timetable[4][4]);
                this.val45 = this.convertStringToBool(data.timeTable.timetable[4][5]);
                this.val46 = this.convertStringToBool(data.timeTable.timetable[4][6]);
                this.val47 = this.convertStringToBool(data.timeTable.timetable[4][7]);
                this.val48 = this.convertStringToBool(data.timeTable.timetable[4][8]);
                this.val49 = this.convertStringToBool(data.timeTable.timetable[4][9]);
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
      return "MA102";
    }else {
      return "null";
    }
  }

  onUpdateClick(){
  	console.log("update clicked");

    console.log(this.dataToSend);
        this.dataToSend.timeTable.timetable[0][0] = this.convertNullTo0(this.val00);
        this.dataToSend.timeTable.timetable[0][1] = this.convertNullTo0(this.val01);
        this.dataToSend.timeTable.timetable[0][2] = this.convertNullTo0(this.val02);
        this.dataToSend.timeTable.timetable[0][3] = this.convertNullTo0(this.val03);
        this.dataToSend.timeTable.timetable[0][4] = this.convertNullTo0(this.val04);
        this.dataToSend.timeTable.timetable[0][5] = this.convertNullTo0(this.val05);
        this.dataToSend.timeTable.timetable[0][6] = this.convertNullTo0(this.val06);
        this.dataToSend.timeTable.timetable[0][7] = this.convertNullTo0(this.val07);
        this.dataToSend.timeTable.timetable[0][8] = this.convertNullTo0(this.val08);
        this.dataToSend.timeTable.timetable[0][9] = this.convertNullTo0(this.val09);

        this.dataToSend.timeTable.timetable[1][0] = this.convertNullTo0(this.val10);
        this.dataToSend.timeTable.timetable[1][1] = this.convertNullTo0(this.val11);
        this.dataToSend.timeTable.timetable[1][2] = this.convertNullTo0(this.val12);
        this.dataToSend.timeTable.timetable[1][3] = this.convertNullTo0(this.val13);
        this.dataToSend.timeTable.timetable[1][4] = this.convertNullTo0(this.val14);
        this.dataToSend.timeTable.timetable[1][5] = this.convertNullTo0(this.val15);
        this.dataToSend.timeTable.timetable[1][6] = this.convertNullTo0(this.val16);
        this.dataToSend.timeTable.timetable[1][7] = this.convertNullTo0(this.val17);
        this.dataToSend.timeTable.timetable[1][8] = this.convertNullTo0(this.val18);
        this.dataToSend.timeTable.timetable[1][9] = this.convertNullTo0(this.val19);

        this.dataToSend.timeTable.timetable[2][0] = this.convertNullTo0(this.val20);
        this.dataToSend.timeTable.timetable[2][1] = this.convertNullTo0(this.val21);
        this.dataToSend.timeTable.timetable[2][2] = this.convertNullTo0(this.val22);
        this.dataToSend.timeTable.timetable[2][3] = this.convertNullTo0(this.val23);
        this.dataToSend.timeTable.timetable[2][4] = this.convertNullTo0(this.val24);
        this.dataToSend.timeTable.timetable[2][5] = this.convertNullTo0(this.val25);
        this.dataToSend.timeTable.timetable[2][6] = this.convertNullTo0(this.val26);
        this.dataToSend.timeTable.timetable[2][7] = this.convertNullTo0(this.val27);
        this.dataToSend.timeTable.timetable[2][8] = this.convertNullTo0(this.val28);
        this.dataToSend.timeTable.timetable[2][9] = this.convertNullTo0(this.val29);

        this.dataToSend.timeTable.timetable[3][0] = this.convertNullTo0(this.val30);
        this.dataToSend.timeTable.timetable[3][1] = this.convertNullTo0(this.val31);
        this.dataToSend.timeTable.timetable[3][2] = this.convertNullTo0(this.val32);
        this.dataToSend.timeTable.timetable[3][3] = this.convertNullTo0(this.val33);
        this.dataToSend.timeTable.timetable[3][4] = this.convertNullTo0(this.val34);
        this.dataToSend.timeTable.timetable[3][5] = this.convertNullTo0(this.val35);
        this.dataToSend.timeTable.timetable[3][6] = this.convertNullTo0(this.val36);
        this.dataToSend.timeTable.timetable[3][7] = this.convertNullTo0(this.val37);
        this.dataToSend.timeTable.timetable[3][8] = this.convertNullTo0(this.val38);
        this.dataToSend.timeTable.timetable[3][9] = this.convertNullTo0(this.val39);

        this.dataToSend.timeTable.timetable[4][0] = this.convertNullTo0(this.val40);
        this.dataToSend.timeTable.timetable[4][1] = this.convertNullTo0(this.val41);
        this.dataToSend.timeTable.timetable[4][2] = this.convertNullTo0(this.val42);
        this.dataToSend.timeTable.timetable[4][3] = this.convertNullTo0(this.val43);
        this.dataToSend.timeTable.timetable[4][4] = this.convertNullTo0(this.val44);
        this.dataToSend.timeTable.timetable[4][5] = this.convertNullTo0(this.val45);
        this.dataToSend.timeTable.timetable[4][6] = this.convertNullTo0(this.val46);
        this.dataToSend.timeTable.timetable[4][7] = this.convertNullTo0(this.val47);
        this.dataToSend.timeTable.timetable[4][8] = this.convertNullTo0(this.val48);
        this.dataToSend.timeTable.timetable[4][9] = this.convertNullTo0(this.val49);
        console.log(this.dataToSend);
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


  	this.timetabledataService.changeMessage("updateOnBatchTimeTable");
  	this.router.navigate(['admin']);
  }
}
