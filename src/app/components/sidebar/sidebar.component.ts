import { Component, OnInit,  ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { StockBalanceComponent } from 'app/stock-balance/stock-balance.component';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    children: {
      path: string;
      title: string;
      icon: string;
      class: string;
  }[]
}

export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Management',  icon: 'person', class: '1', children:[] },
    { path: '/category-management', title: 'Category management',  icon: 'category', class: '2', children:[] },
    { path: '/customer-management', title:'Customer management', icon:'bubble_chart',class: '3', children:[]},
    { path: '/product-management', title:'Product Management', icon:'local_mall',class:'', children:[]},
    { path:'/warehouse-management', title:'WareHouse Management', icon:'store_icon`',class:'', children:[]},
    { path:'/invoice-management', title:'Invoice Management', icon:'content_paste', class:'', children:[]},
    { path:'/company-management', title:'Company Management', icon:'business', class:'', children:[]},
    { path:'/sales-order', title:'Sales Order', icon:'business', class:'' ,children:[] },
    { path:'/inventory-management', title:'Inventory Management', icon:'business', class:'', children: [
      {
        path:'/purchase-order', title:'Purchase Order', icon:'business', class:''},
     
      ]},
      { path:'/stock-balance', title:'Stock Balance', icon:'stock', class:'', children:[]},
      { path:'/stock-ledger', title:'Stock Ledger', icon:'stock', class:'', children:[]},
    // { path: '/report', title: 'Reports',  icon: 'content_paste', class: '' },
    // { path: '/location', title: 'Location',  icon: 'location_on', class: '' },
    // { path: '/clinic', title: 'Clinic', icon: 'local_hospital', class: ''}
    // { path: '/usertype', title: 'User Role',  icon:'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private router: Router) { }

  ngOnInit() {

    this.menuItems = ROUTES.filter(menuItem => menuItem);
    // this.logout()
    // console.log('ng');
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

 fun(el) {
    el.style.backgroundColor = "red";
  }
 

//   logout(){
//     //   console.log('hell');

//     localStorage.clear();
//     if(localStorage.length==0){
//         // console.log('0');
//         // this.router.navigate(["/dashboard"], { replaceUrl: true });
//         // console.log('f');
//         window.location.reload();

//     }else{
//         // console.log('1');

//     }
//   }
}
