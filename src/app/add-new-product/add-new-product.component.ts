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
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {
  hide = true;
  public dialog: MatDialog;
  public productForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddNewProductComponent>,
    private service: ServiceService,
    private cd: ChangeDetectorRef,
    // private router: Router,
    // private http: HttpClient,
     private fb: FormBuilder,
  ) {
    this.productForm = this.fb.group({
      Warehouse: this.fb.control('', Validators.required),
      ProductImage:this.fb.control('',Validators.required),
      Product_Origin:this.fb.control('',Validators.required),
      Product_Category:this.fb.control('',Validators.required),
      sku_code:this.fb.control('',Validators.required),
      ProductCategory: this.fb.control('', Validators.required),
      Customers: this.fb.control('', Validators.required),
      description:this.fb.control('', Validators.required),
    })
  }

  ngOnInit() {
  }

 fetchWarehouse(){

 }



  close(){
    this.dialogRef.close();
  }

  fetchCountry() {
    const dialogRef = this.dialog.open(CommonCountryListComponent ,{width: "70%",height: "86vh",panelClass: 'full-width-dialog'});
   dialogRef.afterClosed().subscribe(result => {
       this.productForm.get('').setValue(result.Country);
     
   }
    );
  }

  fetchCompany() {
    const dialogRef = this.dialog.open(CommonCompanyListComponent ,{width: "70%",height: "86vh",panelClass: 'full-width-dialog'});
    dialogRef.afterClosed().subscribe(result => {
      this.productForm.get('').setValue(result.Company);
      
    });
  }

  fetchModules() {
    const dialogRef = this.dialog.open(CommonCompanyListComponent ,{width: "70%",height: "86vh",panelClass: 'full-width-dialog'});
    dialogRef.afterClosed().subscribe(result => {
      this.productForm.get('').setValue(result.Modules);
     
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
      params: new URLSearchParams( this.productForm.value )
    };
    this.service
    // .postAllData(this.userForm.value,'/user/register', httpOptions).subscribe(response => {
      .postAllData(this.productForm.value,'/customer/register').subscribe(response => {
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
