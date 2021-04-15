import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { ServiceService } from "../service.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { UserDialogComponent } from "../user-dialog/user-dialog.component";
import { MatSnackBar } from "@angular/material";
import { ConformationDiadlogComponent } from "../conformation-diadlog/conformation-diadlog.component";
import { ClinicDialogComponent } from "app/clinic-dialog/clinic-dialog.component";
import { ConformationDialogCComponent } from "app/conformation-dialog-c/conformation-dialog-c.component";
export interface ClinicData {
          id: string;
          name: string;
          prgress: string;
          color: string;
}
@Component({
          selector: "clinic",
          templateUrl: "./clinic.component.html",
          styleUrls: ["./clinic.component.scss"]
})
export class ClinicComponent implements OnInit {
          displayedColumns: string[] = [
                    "id",
                    "name",
                    "email",
                    "phone",
                    "address",
                    "pincode",
                    "createdby_user_id",
                    "doctor_name",
                    "timings",
                    "edit",
                    "delete"
          ];
          dataSource_clinic: MatTableDataSource<ClinicComponent>;
          @ViewChild(MatPaginator, { read: true, static: false }) paginator: MatPaginator;
          @ViewChild(MatSort, { read: true, static: false }) sort: MatSort;
          constructor(
                    private service: ServiceService,
                    public dialog: MatDialog,
                    private snackBar: MatSnackBar
          ) {
                    // Create 100 users
                    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
                    // // Assign the data to the data source for the table to render
                    // this.dataSource = new MatTableDataSource(users);
          }
          ngOnInit() {
                    var a = new Date();
                    // console.log(a.toLocaleString().slice(0,10));

                    this.clinic();
          }
          applyFilter(filterValue: string) {
                    this.dataSource_clinic.filter = filterValue.trim().toLowerCase();

                    if (this.dataSource_clinic.paginator) {
                              this.dataSource_clinic.paginator.firstPage();
                    }
          }
          clinic() {
                               this.service
                              .getAllData("/clinic/getAll")
                              .subscribe(response => {
                                        // console.log(response);
                                        const getPos = this.compute(response);
                                        getPos.then(response => {
                                                  this.dataSource_clinic = new MatTableDataSource(
                                                            JSON.parse(
                                                                      JSON.stringify(
                                                                                response
                                                                      )
                                                            )
                                                  );
                                                  this.dataSource_clinic.paginator = this.paginator;
                                                  this.dataSource_clinic.sort = this.sort;
                                                  //  console.log("data",this.dataSource);
                                        });
                              });
          }
          async compute(data: any) {
                    return new Promise(resolve => {
                              for (var i = 0; i < data.length; i++) {
                                        data[i].pos = i + 1;
                                        if (i === data.length - 1) {
                                        //console.log(data);
                                          resolve(data);
                                        }
                              }
                    });
          }
            //Add new Clinic
            addclinic() {
                    const dialogRef = this.dialog.open(ClinicDialogComponent, {
                              width: "25%",
                              data: {}
                    });
                    dialogRef.afterClosed().subscribe(result => {
                              // console.log('The dialog was closed');
                              this.ngOnInit();
                    });
          }
          // edit Clinic
          edit(row) {
                   const dialogRef = this.dialog.open(ClinicDialogComponent, {width: "25%",data: row});
          }
          //delete Clinic
          delete(c_email_id) {
                    const dialogRef = this.dialog.open(
                              ConformationDialogCComponent,
                              {
                                        width: "20%",
                                        data: { c_email_id }
                              }
                    );
                    dialogRef.afterClosed().subscribe(result => {
                              // console.log('The dialog was closed');
                              this.ngOnInit();
                    });
          }
          openSnackBar(message, action) {
                    this.snackBar.open(message, action, {
                              duration: 2000
                    });
          }
}