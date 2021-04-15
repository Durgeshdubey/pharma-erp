import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import PerfectScrollbar from 'perfect-scrollbar';
import{ServiceService} from '../../service.service';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  token;
  name;
  password;

  constructor( public location: Location, private router: Router,private service:ServiceService) {
    
  }

  ngOnInit() {
      // console.log(localStorage,"g");
    
    // this.token=localStorage;
    // console.log(this.token);
    if(localStorage.length==0){
        // console.log('0');
        
    }
    else{
      this.token=localStorage;
      
    }

   // this.token="login";
    // console.log(this.token);
    
  }
  ngAfterViewInit() {

    
    //   this.runOnRouteChange();
  }
  isMaps(path){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if(path == titlee){
          return false;
      }
      else {
          return true;
      }
  }
  

}
