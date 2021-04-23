import { Component, OnInit } from '@angular/core';
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
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.scss']
})
export class AddNewCustomerComponent implements OnInit {
  hide = true;
  public dialog: MatDialog;
  public customerForm: FormGroup;
  public Address: FormArray;
  constructor(
    public dialogRef: MatDialogRef<AddNewCustomerComponent>,
    private service: ServiceService,
    // private router: Router,
    // private http: HttpClient,
 
    
    private fb: FormBuilder,
  ) {
    this.customerForm = this.fb.group({
      CustomerId: this.fb.control('', Validators.required),
      CustomerName:this.fb.control('',Validators.required),
      Product:this.fb.control('', Validators.required), 
      Contact_Person_Manager: this.fb.control('', Validators.required),
      Company_Name: this.fb.control('', Validators.required),
      MobileNo: this.fb.control('', Validators.required),
      Owner_Name_Details: this.fb.control('', Validators.required),
      LandlineNo: this.fb.control('', Validators.required),
      EmailId: this.fb.control('', Validators.required),
  
      Website: this.fb.control('', Validators.required),
      Online_Offline_customer: this.fb.control('', Validators.required),
      CustomerType: this.fb.control('', Validators.required),// Wholesaler / Retailer / Stockist / Distributor
      Active_Inactive_customer: this.fb.control('', Validators.required),
      Password: this.fb.control('', Validators.required),
      // Category: this.fb.control('', Validators.required),
      Modules: this.fb.control('',Validators.required),
      Country: this.fb.control('', Validators.required),
      Company: this.fb.control('', Validators.required),
      Shipping: this.fb.control('', Validators.required),
      Rates: this.fb.control('', Validators.required),
      Total_Invoice_Value: this.fb.control('', Validators.required),
      Sales_Invoice_Number: this.fb.control('', Validators.required),
      Doing_Business_as: this.fb.control('', Validators.required),
      Check_Received: this.fb.control('', Validators.required),
      Link: this.fb.control('', Validators.required),
      Address: this.fb.array([this.createAddress()]),
    })
  }

  ngOnInit() {
  }

  get addressControls() {
    return this.customerForm.get('Address')['controls'];
  }
  removeAddress(i: number) {
    this.Address.removeAt(i);
  }
  

  close(){
    this.dialogRef.close();
  }

  fetchCountry() {
    const dialogRef = this.dialog.open(CommonCountryListComponent ,{width: "70%",height: "86vh",panelClass: 'full-width-dialog'});
   dialogRef.afterClosed().subscribe(result => {
       this.customerForm.get('').setValue(result.Country);
     
   }
    );
  }

  fetchCompany() {
    const dialogRef = this.dialog.open(CommonCompanyListComponent ,{width: "70%",height: "86vh",panelClass: 'full-width-dialog'});
    dialogRef.afterClosed().subscribe(result => {
      this.customerForm.get('').setValue(result.Company);
      
    });
  }
  createAddress(): FormGroup {
    return this.fb.group({
      vendor_address: this.fb.control('')
    });
  }
  addAddress(): void {
    this.Address = this.customerForm.get('Address') as FormArray;
    this.Address.push(this.createAddress());
  }
  fetchModules() {
    const dialogRef = this.dialog.open(CommonCompanyListComponent ,{width: "70%",height: "86vh",panelClass: 'full-width-dialog'});
    dialogRef.afterClosed().subscribe(result => {
      this.customerForm.get('').setValue(result.Modules);
     
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
      params: new URLSearchParams( this.customerForm.value )
    };
    this.service
    // .postAllData(this.userForm.value,'/user/register', httpOptions).subscribe(response => {
      .postAllData(this.customerForm.value,'/customer/register').subscribe(response => {
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
