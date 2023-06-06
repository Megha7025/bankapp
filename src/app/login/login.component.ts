import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim='Your perfect banking partner'
  acnt='Enter your ac number'

  acno=''
  psw=''

  userDetails:any={
    1000:{acno:1000,username:"amal",password:123,balance:100000},
    1002:{acno:1002,username:"anu",password:123,balance:200000},
    1003:{acno:1003,username:"joyal",password:123,balance:150000},
    1004:{acno:1004,username:"anagha",password:123,balance:100000},
  }

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    var acno=this.acno
    var psw=this.psw
    let userDetails=this.userDetails
    if(acno in userDetails){
      if(psw==userDetails[acno]['password']){
        alert('login success')
      }
      else{
        alert('incorrect password')
      }
    }
    else{
      alert('user not exist')
    }
  }


  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno); 
  }

  pswChange(event:any){
    this.psw=event.target.value
    console.log(this.psw);
    
  }

}
