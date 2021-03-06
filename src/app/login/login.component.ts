import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string 
  password: string
  constructor(
    public fireAuth: AngularFireAuth,
    public loginservice: LoginService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }
  loginUser(){
    this.loginservice.signInUser(this.email,this.password)
    .then((user)=>{
      this.router.navigate(['userData'])
    }).catch(err=>{
      console.log(err)
    })
  }
 

}
