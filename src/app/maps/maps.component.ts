import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Logs } from 'selenium-webdriver';
declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  Username
  Userdate
  attendance

lng:any
lat:any
details;
punch_in_lat : number;
punch_in_lng : number;
punch_out_lat : number;
punch_out_lng;
puch_in_time;
punch_out_time;

  constructor(public dialogRef: MatDialogRef<MapsComponent>,@Inject(MAT_DIALOG_DATA) public data) { 
      // console.log(data,"hg");
    //attendance
    this.details=data;
    // console.log(data.row);
    // this.Username=data.row.name
    // this.Userdate=this.formatDate(data.row.created_date)
    
    //  console.log(this.details,"details");
    
    this.attendance=this.details.map

    if(this.details.data){
    // console.log(this.details.data.el);
    
    this.punch_in_lat=parseFloat( this.details.data.punch_in_lat);
    
    
    this.punch_in_lng=parseFloat( this.details.data.punch_in_lng);

    this.punch_out_lat=this.details.data.punch_out_lat
    this.punch_out_lng=this.details.data.punch_out_lng

    this.puch_in_time=this.formatDate(this.details.data.punch_in_time);
    this.punch_out_time=this.formatDate(this.details.data.punch_out_time);
    // console.log(this.punch_out_time,"punch");
    // console.log(this.puch_in_time,"in");


    }else {

    //Report
    this.Username=data.row.name
    this.Userdate=this.formatDate(data.row.created_date)
    this.details=data.name;
      console.log(this.details);

    this.lat=parseFloat(data.lat);
      this.lng=parseFloat(data.lng);
      // console.log(this.lat,this.lng);
    }
  }

  ngOnInit() {
   
 
  }

  formatDate(getDate){
    var today = new Date(getDate);
    let gmt = today['toLocaleString']();
    // console.log('utc',gmt);
    
    return gmt
  }
  
  close(){
    this.dialogRef.close();
  }


  time(){
    // console.log('time');
    
  }

}
