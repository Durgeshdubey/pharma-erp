import { Component, OnInit } from '@angular/core';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatDialog,
  MatDialogRef,
} from "@angular/material";
@Component({
  selector: 'app-common-company-list',
  templateUrl: './common-company-list.component.html',
  styleUrls: ['./common-company-list.component.scss']
})
export class CommonCompanyListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
