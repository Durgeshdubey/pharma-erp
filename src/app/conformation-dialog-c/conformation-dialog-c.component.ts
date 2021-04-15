import { Component, OnInit, Inject } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ServiceService} from '../service.service'

@Component({
  selector: 'app-conformation-dialog-c',
  templateUrl: './conformation-dialog-c.component.html',
  styleUrls: ['./conformation-dialog-c.component.scss']
})
export class ConformationDialogCComponent implements OnInit {
  Clinic;

  constructor(public dialogRef: MatDialogRef<ConformationDialogCComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private service:ServiceService,private snackBar: MatSnackBar ) {
      // console.log(data.user_id);
      this.Clinic = data.c_email_id;
     // this.Clinic=data.email_id;
     }
  ngOnInit() {
  }
  deleteRowClinic(c_email_id){
    var data = { 
      c_id: c_email_id,
      id: localStorage.getItem("c_id")
  }
  
  this.service.postAllData(data,'/clinic/delete').subscribe(response=>{
    if(response===true){
      var message="Clinic Deleted Successfully"
      var action="Done"
      this.openSnackBar(message,action);
      this.dialogRef.close();
      // this.ngOnInit();
    }
    else{
      var message="Clinic Cannot be Deleted"
      var action="Done"
      this.openSnackBar(message, action)
      // this.ngOnInit();
    }
  })
  }
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 2000,

    });
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
