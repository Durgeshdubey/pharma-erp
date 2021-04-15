import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import {  ClinicComponent } from '../../clinic/clinic.component';
import { ReportComponent } from '../../report/report.component';
  import {locationComponent } from '../../location/location.component';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
// import { MapsComponent } from '../../maps/maps.component';
// import {LoginComponent} from '../../login/login.component';
import { MatTableModule,MatPaginatorModule,MatSortModule, MatExpansionPanelHeader, MatExpansionPanelDescription } from '@angular/material' 
// import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
import {ServiceService} from '../../service.service'
import {UserDialogComponent} from '../../user-dialog/user-dialog.component'
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {AgmCoreModule} from '@agm/core'
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
// import { LoginComponent } from '../../login/login.component';
import {GoogleMapsAPIWrapper} from '@agm/core';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ConformationDiadlogComponent} from '../../conformation-diadlog/conformation-diadlog.component'
import {AgmSnazzyInfoWindowModule } from "@agm/snazzy-info-window";
import {ConformationDialogCComponent } from "../../conformation-dialog-c/conformation-dialog-c.component";
 // import {ConfigComponent} from '../../config/config.component';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AutocompleteComponent } from '../../location/google-places.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatMenuModule,



} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion'
import { ClinicDialogComponent } from 'app/clinic-dialog/clinic-dialog.component';
import { CustomerManagementComponent } from '../../customer-management/customer-management.component';
import { CategoryManagementComponent } from '../../category-management/category-management.component';
import { ProductManagementComponent } from '../../product-management/product-management.component';
import { InvoiceManagementComponent} from '../../invoice-management/invoice-management.component';
import { WarehouseManagementComponent} from '../../warehouse-management/warehouse-management.component';
import { CompanyManagementComponent } from '../../company-management/company-management.component';
import { InventoryManagementComponent } from '../../inventory-management/inventory-management.component';
import { PurchaseOrderComponent } from '../../purchase-order/purchase-order.component';
import { SalesOrderComponent } from '../../sales-order/sales-order.component';
import { StockBalanceComponent } from '../../stock-balance/stock-balance.component';
import { StockLedgerComponent } from '../../stock-ledger/stock-ledger.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    ScrollDispatchModule,
    MatSelectModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAD58QNK2GNc23X8GkJBosVkckM2oxur-E'}),
    MatTableModule,
    MatSnackBarModule,
    MatTooltipModule,

  
    MatGoogleMapsAutocompleteModule,
    AgmSnazzyInfoWindowModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatDatepickerModule,
    // HttpClientModule,
    // HttpModule,
    MatDialogModule,
    MatNativeDateModule,
    MatSortModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    UserDialogComponent,
    ReportComponent,
    locationComponent,
    AutocompleteComponent,
   // ConfigComponent,
   // MapsComponent,
    // LoginComponent,
    ConformationDialogCComponent,
    ConformationDiadlogComponent,
    ClinicComponent,
    ClinicDialogComponent,
    CustomerManagementComponent,
    CategoryManagementComponent,
    ProductManagementComponent,
    WarehouseManagementComponent,
    InvoiceManagementComponent,
    CompanyManagementComponent,
    InventoryManagementComponent,
    PurchaseOrderComponent,
    SalesOrderComponent,
    StockBalanceComponent,
    StockLedgerComponent,
  ],
  providers: [
    ServiceService,
    GoogleMapsAPIWrapper,
  ],
  entryComponents: [UserDialogComponent, ConformationDiadlogComponent, ClinicDialogComponent, ConformationDialogCComponent]
})

export class AdminLayoutModule {}
