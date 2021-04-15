
import {Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import{ServiceService} from '../service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MapsComponent} from '../maps/maps.component';
import {ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import * as XLSX from 'xlsx';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}



@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  displayedColumns: string[] = ['postion', 'report','name', 'date','details'];
  dataSource: MatTableDataSource<ReportComponent>;
 @ViewChild('TABLE',{ read: true, static: false }) table: ElementRef;
 @ViewChild(MatPaginator,{ read: true, static: false }) paginator: MatPaginator;
  @ViewChild(MatSort,{ read: true, static: false }) sort: MatSort;

  constructor(private service:ServiceService,public dialog: MatDialog) {
    // Create 100 users
   this.user();
  }

  ngOnInit() {
   
  }
  ExportTOExcel()
{
  const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
  /* save to file */
  XLSX.writeFile(wb, 'SheetJS.xlsx');
  
}
  user(){
    this.service.getAllData('/reports/getAll').subscribe(response=>{
      // console.log(response);
      const getPos = this.compute(response);
      getPos.then(response => {
        
        
        this.dataSource = new MatTableDataSource(
          JSON.parse(JSON.stringify(response))
        );
        

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        //  console.log("data",this.dataSource);
     
      });
    })
  
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  async compute(data: any) {
    return new Promise(resolve => {
      for (var i = 0; i < data.length; i++) {
        data[i].pos = i + 1;
        if (i == data.length - 1) {
          //console.log(data);
          resolve(data);
        }
      }
    });
  }

  formatDate(getDate){
    var today = new Date(getDate);
    let gmt = today['toLocaleString']();
    return gmt
  }
  //map
  location(lat,lng,row){
   if(lat==0 && lng==0){
     alert('wrong Location')
    
   }
   else{
    const dialogRef = this.dialog.open(MapsComponent, {
      width: '50%',
      data: {lat: lat, lng: lng,row}
    });
   }
    
    
  }
}

