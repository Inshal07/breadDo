import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public fireAuth: AngularFireAuth,
  ) { }
  signInUser(email:string, password:string){
    return this.fireAuth.signInWithEmailAndPassword(email, password)
    .then(res=>
      {
       
      })
      .catch( error=>console.log(error))
   }
   getUser(){
    return this.fireAuth.authState;
  }
}
