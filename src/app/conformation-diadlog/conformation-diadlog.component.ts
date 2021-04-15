import { Component, OnInit ,Inject} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ServiceService} from '../service.service'
@Component({
  selector: 'app-conformation-diadlog',
  templateUrl: './conformation-diadlog.component.html',
  styleUrls: ['./conformation-diadlog.component.scss']
})
export class ConformationDiadlogComponent implements OnInit {
User;
  constructor(public dialogRef: MatDialogRef<ConformationDiadlogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service:ServiceService, private snackBar: MatSnackBar ) {
      // console.log(data.user_id);
      this.User=data.email;
     // this.Clinic=data.email_id;
     }

  ngOnInit() {
  }
  deleteRow(email){
    var data = {
      u_id: email,
    id: localStorage.getItem("u_id")
  }
  
  this.service.postAllData(data,'/user/delete').subscribe(response=>{
    if(response==true){
      var message="User Deleted Successfully"
      var action="Done"
      this.openSnackBar(message,action);
      this.dialogRef.close();
      // this.ngOnInit();
    }
    else{
      var message = "User Canot Deleted"
      var action = "Done"
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
