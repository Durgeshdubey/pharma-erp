import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './Material'
import { MatIconModule } from '@angular/material/icon';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion'
// import { AutocompleteComponent } from './location/google-places.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { TableListComponent } from './table-list/table-list.component';
// import { TypographyComponent } from './typography/typography.component';
// import { IconsComponent } from './icons/icons.component';
// import { MapsComponent } from './maps/maps.component';
// import { NotificationsComponent } from './notifications/notifications.component';
// import { UpgradeComponent } from './upgrade/upgrade.component';
import { AgmCoreModule} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatTableModule,
  MatMenuModule,

 
} from '@angular/material';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
// import {ConfigComponent} from './location/config/config.component';
 // import {LocationComponent} from './location/location.component'
import { from } from 'rxjs';
import { CommonCountryListComponent } from './common-country-list/common-country-list.component';
import { CommonCompanyListComponent } from './common-company-list/common-company-list.component';





// import { ConformationDialogCComponent } from './conformation-dialog-c/conformation-dialog-c.component';
// import { ClinicComponent } from './clinic/clinic.component';
// import { ClinicDialogComponent } from './clinic-dialog/clinic-dialog.component';
// import { LoginComponent } from './login/login.component';
// import { UserDialogComponent } from './user-dialog/user-dialog.component';



@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTableModule,
 

    MatTooltipModule,
    MatExpansionModule,
    MatGoogleMapsAutocompleteModule,
    MatSelectModule,
    MatIconModule,
    MaterialModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAD58QNK2GNc23X8GkJBosVkckM2oxur-E'}),
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  //  MapsComponent,  
   //   AutocompleteComponent,

    LoginComponent,
  CommonCountryListComponent,
  CommonCompanyListComponent,
 // ConformationDialogCComponent,
 // ClinicComponent,
 // ClinicDialogComponent,
   //ConfigComponent,
   // LocationComponent
    // UserDialogComponent,

  ],
  providers: [ GoogleMapsAPIWrapper,],
  bootstrap: [AppComponent]
})
export class AppModule {
   
 }
