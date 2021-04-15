import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceService } from '../service.service'
//import { endTimeRange } from '@angular/core/src/profile/wtf_impl';
import { MatSnackBar } from '@angular/material';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import Swal from 'sweetalert2';
import { CommonCountryListComponent } from 'app/common-country-list/common-country-list.component';
import { CommonCompanyListComponent } from 'app/common-company-list/common-company-list.component';
@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})

export class UserDialogComponent implements OnInit {
  hide = true;
  public dialog: MatDialog;
  public userForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    private service: ServiceService,
    // private router: Router,
    // private http: HttpClient,
    private fb: FormBuilder,
  ) {
    this.userForm = this.fb.group({
      MemberId: this.fb.control('', Validators.required),
      EmailId: this.fb.control('', Validators.required),
      Password: this.fb.control('', Validators.required),
      Category: this.fb.control('', Validators.required),
      Modules: this.fb.control('',Validators.required),
      Country: this.fb.control('', Validators.required),
      Company: this.fb.control('', Validators.required),
      Role: this.fb.control('internal', Validators.required)
    })
  }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

  fetchCountry() {
    const dialogRef = this.dialog.open(CommonCountryListComponent ,{width: "70%",height: "86vh",panelClass: 'full-width-dialog'});
   dialogRef.afterClosed().subscribe(result => {
       this.userForm.get('').setValue(result.Country);
     
   }
    );
  }

  fetchCompany() {
    const dialogRef = this.dialog.open(CommonCompanyListComponent ,{width: "70%",height: "86vh",panelClass: 'full-width-dialog'});
    dialogRef.afterClosed().subscribe(result => {
      this.userForm.get('').setValue(result.Company);
      
    });
  }

  fetchModules() {
    const dialogRef = this.dialog.open(CommonCompanyListComponent ,{width: "70%",height: "86vh",panelClass: 'full-width-dialog'});
    dialogRef.afterClosed().subscribe(result => {
      this.userForm.get('').setValue(result.Modules);
     
    });
  }



  addUser(){
  // if(confirm("Do u wish to continue ?")) {
    Swal.fire({
      title: 'Do u wish to continue ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
    let httpOptions = {
      // headers: new HttpHeaders({Authorization: localStorage.getItem('token')}),
      params: new URLSearchParams( this.userForm.value )
    };
    this.service
    // .postAllData(this.userForm.value,'/user/register', httpOptions).subscribe(response => {
      .postAllData(this.userForm.value,'/user/register').subscribe(response => {
      if (response['status'] === 'failed') {
        // alert(" Request failed try again later");
        Swal.fire('Request failed try again later');
      } else if(response['status'] === 'exist') {
        // alert("User code already exist, Please use unique value");
        Swal.fire('User code already exist, Please use unique value');
      } else if(response['status'] === 'username_exist') {
        // alert("UserName already exist, Please use unique value");
        Swal.fire('UserName already exist, Please use unique value');
      } else {
        // this.dialogRef.close();
        location.reload();
      }
  }); 
}
});
// }
}

}
