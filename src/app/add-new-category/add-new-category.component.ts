import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceService } from '../service.service'
//import { endTimeRange } from '@angular/core/src/profile/wtf_impl';
import { MatSnackBar } from '@angular/material';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommonCountryListComponent } from 'app/common-country-list/common-country-list.component';
import { CommonCompanyListComponent } from 'app/common-company-list/common-company-list.component';

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.scss']
})
export class AddNewCategoryComponent implements OnInit {

  hide = true;
  public dialog: MatDialog;
  public categoryForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddNewCategoryComponent>,
    private service: ServiceService,
    private cd: ChangeDetectorRef,
    // private router: Router,
    // private http: HttpClient,
     private fb: FormBuilder,
  ) {
    this.categoryForm = this.fb.group({
    
      Category_name: this.fb.control('', Validators.required),
      Category_id:this.fb.control('',Validators.required),
      Select_Users:this.fb.control('',Validators.required),
      Select_Products:this.fb.control('',Validators.required),
     
    })
  }

  ngOnInit() {
  }

 fetchCustomers(){

 }

 fetchProducts(){

 }

  close(){
    this.dialogRef.close();
  }

  fetchCountry() {
    const dialogRef = this.dialog.open(CommonCountryListComponent ,{width: "70%",height: "86vh",panelClass: 'full-width-dialog'});
   dialogRef.afterClosed().subscribe(result => {
       this.categoryForm.get('').setValue(result.Country);
     
   }
    );
  }

  fetchCompany() {
    const dialogRef = this.dialog.open(CommonCompanyListComponent ,{width: "70%",height: "86vh",panelClass: 'full-width-dialog'});
    dialogRef.afterClosed().subscribe(result => {
      this.categoryForm.get('').setValue(result.Company);
      
    });
  }

  fetchModules() {
    const dialogRef = this.dialog.open(CommonCompanyListComponent ,{width: "70%",height: "86vh",panelClass: 'full-width-dialog'});
    dialogRef.afterClosed().subscribe(result => {
      this.categoryForm.get('').setValue(result.Modules);
     
    });
  }



  addCustomer(){
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
      params: new URLSearchParams( this.categoryForm.value )
    };
    this.service
    // .postAllData(this.userForm.value,'/user/register', httpOptions).subscribe(response => {
      .postAllData(this.categoryForm.value,'/customer/register').subscribe(response => {
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
