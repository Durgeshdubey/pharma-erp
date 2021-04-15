import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { ReportComponent } from '../../report/report.component';
import { locationComponent } from '../../location/location.component';
import { ClinicComponent } from '../../clinic/clinic.component'
import { CategoryManagementComponent } from '../../category-management/category-management.component';
import { CustomerManagementComponent } from 'app/customer-management/customer-management.component';
import { ProductManagementComponent } from 'app/product-management/product-management.component';
import { WarehouseManagementComponent } from '../../warehouse-management/warehouse-management.component';
import { InvoiceManagementComponent } from '../../invoice-management/invoice-management.component';
import { CompanyManagementComponent } from '../../company-management/company-management.component';
import { InventoryManagementComponent } from '../../inventory-management/inventory-management.component';
import { PurchaseOrderComponent } from '../../purchase-order/purchase-order.component';
import { SalesOrderComponent } from '../../sales-order/sales-order.component';
import { StockBalanceComponent } from '../../stock-balance/stock-balance.component';
import { StockLedgerComponent } from '../../stock-ledger/stock-ledger.component';
//import { MapsComponent } from '../../maps/maps.component';

//import { patch } from 'webdriver-js-extender';
// import { LoginComponent } from '../../login/login.component';
export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
// {path:'login',component: LoginComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'category-management', component: CategoryManagementComponent},
    { path: 'customer-management' , component:CustomerManagementComponent},
    {path: 'product-management', component:ProductManagementComponent},
    { path: 'user-profile',   component: UserProfileComponent },
    { path:'invoice-management', component:InvoiceManagementComponent},
    { path:'warehouse-management', component:WarehouseManagementComponent}, 
    { path:'company-management', component:CompanyManagementComponent}, 
    { path:'inventory-management', component:InventoryManagementComponent}, 
    { path:'purchase-order', component:PurchaseOrderComponent}, 
    { path:'sales-order', component:SalesOrderComponent}, 
    { path:'stock-balance', component:StockBalanceComponent},
    { path:'stock-ledger', component:StockLedgerComponent},
    { path: 'report',     component: ReportComponent },
    { path: 'location',     component: locationComponent },
    { path: 'clinic',          component: ClinicComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
];
