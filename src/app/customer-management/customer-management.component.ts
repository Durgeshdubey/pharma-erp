import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatPaginator, MatSort, MatTableDataSource,MatDialog } from "@angular/material";
import { UserDialogComponent } from 'app/user-dialog/user-dialog.component';
// import { EditUserComponent } from 'app/edit-user/edit-user.component';
import Swal from 'sweetalert2';
import { AddNewCustomerComponent } from 'app/add-new-customer/add-new-customer.component';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.scss']
})
export class CustomerManagementComponent implements OnInit {

  token;
  id;
  CustomerDisplayedColumns: string[] = [
    "CustomerId",
    "Product",
    "Quantity",
    "Rates",
    "Shipping",
    "Total_Invoice_Value",
    "Sales_Invoice_Number",
    "Link",
     "edit",
     "delete"
];
customer_dataSource: MatTableDataSource<CustomerManagementComponent>;
  @ViewChild(MatPaginator,{ static: false }) paginator: MatPaginator;
  @ViewChild(MatSort,{ static: false }) sort: MatSort;

  constructor(
    public dialog: MatDialog,private service: ServiceService
  ) {
  }

  ngOnInit() {
    if (localStorage.length == 0) {
    } else {
      this.user();
      this.id = setInterval(() => {
        this.user();
      },10000);
    }
  }
  ngOnDestroy(){
    clearInterval(this.id);
  }

  ngAfterViewInit() {
    this.customer_dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.customer_dataSource.filter = filterValue.trim().toLowerCase();
    if (this.customer_dataSource.paginator) {
              this.customer_dataSource.paginator.firstPage();
    }
}

  addNewCustomer(){
    const dialogRef = this.dialog.open(AddNewCustomerComponent ,{width: "70%",height: "86vh",panelClass: 'full-width-dialog'});
  }

  // edit(row){
  //   const dialogRef = this.dialog.open(EditUserComponent,{width: "70%",height: "86vh",panelClass: 'full-width-dialog',data: row});
  // }

  delete(row){
    // if(confirm("Do you want to delete this user ?")) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
    console.log(row);
    // let httpOptions = {
    //   headers : new HttpHeaders({ 'Authorization': localStorage.getItem('token') })
    // };
    // this.service.postAllData(row,'/user/delete', httpOptions).subscribe(response => {
      this.service.postAllData(row,'/user/delete').subscribe(response => {
      if (response['status'] === 'success') {
        location.reload();
      }
    }
    );
  }
  });
  }

  user() {
  
  // let httpOptions = {
  //     headers : new HttpHeaders({ 'Authorization': localStorage.getItem('token') }),
  //    // params : new URLSearchParams({'role_id': '5'})
  //   };
  // this.service
  //           .getAllData("/user/", httpOptions)
  //               .subscribe(response => {
  //                         const getPos = this.compute(response);
  //                         getPos.then(response => {
  //                                   this.user_dataSource = new MatTableDataSource(
  //                                             JSON.parse(
  //                                                       JSON.stringify(
  //                                                                 response
  //                                                       )
  //                                             )
  //                                   );
  //                                   this.user_dataSource.paginator = this.paginator;
  //                                this.user_dataSource.sort = this.sort;
  //                         });
  //               });
  }
  async compute(data: any) {
      return new Promise(resolve => {
                for (var i = 0; i < data.length; i++) {
                          data[i].pos = i + 1;
                          if (i == data.length - 1) {
                                    resolve(data);
                          }
                }
      });
  }
}
