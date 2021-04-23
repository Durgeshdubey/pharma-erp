import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import{ServiceService} from '../service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginUSer = false;

  token;
  //name;
  email_id;
  role_id;
  password;
  hide = true;
  constructor( private service:ServiceService,private router: Router) {

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
 
  redirect(){
    this.router.navigateByUrl('/user-profile');
  }
  bypass(){
    this.router.navigateByUrl('/user-profile');
  }
  

 //Login
 login(){

  if(this.email_id==null){
      alert('enter your Email')
  }else if(this.password==null){
      alert("enter your password")
  }
  else{
    this.LoginUSer=true
    const data={
      email_id:this.email_id,
      password:this.password
    }
    this.service.postAllData(data,'/user/loginAdmin').subscribe(response=>{
    // console.log(response['role_id']);
      if(response === false){
      //   console.log('erro');

         alert('Username or Password is Incorrect')
         this.LoginUSer = false
      }
      else{
        var email_id = response['email_id'];
        var u_name = response['name'];
        var role_id=response['role_id'];
        var u_id = response['u_id']
        localStorage.setItem("email_id", email_id);
        localStorage.setItem("name",u_name);
        localStorage.setItem("u_id",u_id);
        localStorage.setItem("role_id",role_id);

       this.router.navigateByUrl('/user-profile');
       this.ngOnInit()

      }
      
  //  localStorage.setItem(response.email,response.password)

    },
    )
  }

 }

}
