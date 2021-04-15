import { Component, OnInit, Inject } from '@angular/core'; 
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceService } from '../service.service'
// import { endTimeRange } from '@angular/core/src/profile/wtf_impl';
import { MatSnackBar } from '@angular/material';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-clinic-dialog',
  templateUrl: './clinic-dialog.component.html',
  styleUrls: ['./clinic-dialog.component.scss']
})
export class ClinicDialogComponent implements OnInit {

  showprogress;
  edit;
  rowdata;
  c_id;
  c_name;
  c_email_id;
  createdby_user_id;
  c_address;
  c_timings;
  c_phone;
  c_doctor_name;
  c_pincode;
  dataSource;

  hide = true;
  constructor (private snackBar: MatSnackBar, public dialogRef: MatDialogRef<ClinicDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any, private service: ServiceService) {
    //  console.log(data);
    this.rowdata = data;
    // console.log(this.rowdata.email);
    this.edit = this.rowdata.c_email_id;
    // this.validation=false
  }
  clinic() {
    this.service.getAllData('/clinic/getAll').subscribe(response => {
      this.dataSource = JSON.parse(JSON.stringify(response))
      // console.log(this.dataSource);
    })
  }
  ngOnInit() {
    this.clinic();
  }
  save() {
    // console.log(this.dataSource);
    if (this.c_name == null) {
      this.openSnackBar("Enter your name", "ok")
    }
    else if (this.c_id == null) {
      // this.validation=true;
      this.openSnackBar("Enter user Id", "ok")
    }
    else if (this.c_email_id == null) {
      // this.validation=true;
      this.openSnackBar("Enter your email", "ok")
    }
    else if (this.c_phone == null) {
      this.openSnackBar("Enter your Phone number", "ok")
    }
    else if (this.createdby_user_id == null) {
      this.openSnackBar("Enter the Createdby_user_id", "ok")
    }
    else if (this.c_doctor_name == null) {
      this.openSnackBar("Enter the Doctors name", "ok")
    }
    else if (this.c_timings == null) {
      this.openSnackBar("Enter your Timings", "ok")
    }
    else if (this.c_pincode == null) {
      this.openSnackBar("Enter your pincode", "ok")
    }
    else {
      const data = {
        clinic: {
          c_id:this.c_id,
          c_name: this.c_name,
          c_email_id: this.c_email_id,
          c_address: this.c_address,
           createdby_user_id: this.createdby_user_id,
          c_phone: this.c_phone,
          c_timings: this.c_timings,
          c_pincode: this.c_pincode,
          c_doctor_name: this.c_doctor_name
          // role_id:this.role_id,
          // gender:this.gender1
        },
        id: localStorage.getItem('c_id')
      }
      //  console.log(data);
      this.showprogress = true;
      this.service.postAllData(data, '/clinic/save').subscribe(response => {
        // console.log(JSON.stringify(response));
        if (response) {
          this.showprogress = false;
          this.openSnackBar("Clinic Added Successfully", 2000)
          this.ngOnInit();
          this.dialogRef.close();
        }
        // console.log("data send");
        // this. close();
      },
        error => {
          this.openSnackBar('Clinic already exists with this Email. Try other Email Id', 4000)
          this.showprogress = false;
        }
      )
    }
  }
  close() {
    this.dialogRef.close();
  }

  // SET ROLE
  // setRoleId(role_id) {
  //   // console.log(role_id);
  //   //this.userRole=role_id
  //   this.rowdata.role_id = role_id;
  // }
  // check(gender){
  //   // console.log();
  //   this.gender1=gender
  //   this.rowdata.gender=gender;
  // }
  // Snackbar
  openSnackBar(message: string, duration: any) {
    this.snackBar.open(message, "Done", {
      duration: duration,
    });
  }
  update(rowdata) {
    this.showprogress = true;
        const data = {
      clinic: {
        c_id: rowdata.c_id,
        c_name: rowdata.c_name,
        c_email_id: rowdata.c_email_id,
        c_phone: rowdata.c_phone,
        c_address: rowdata.c_address,
         createdby_user_id: rowdata.createdby_user_id,
        c_timings: rowdata.timings,
        c_doctor_name: rowdata.c_doctor_name,
        c_pincode: rowdata.c_pincode
      },
      id: localStorage.getItem('c_id')
    }
    // console.log(data,"new");
    this.service.postAllData(data, '/clinic/update').subscribe(response => {
    this.showprogress = false;
    this.openSnackBar("Clinic Updated", 2000)
    this.dialogRef.close();
     // this.dataSource = JSON.parse(JSON.stringify(response))
       console.log(response);
    })
  }
}
