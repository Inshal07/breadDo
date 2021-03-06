import { Component, OnInit } from '@angular/core';
import { GetuserdataService } from '../services/getuserdata.service';
import { Userdata } from '../shared/userdata';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import {LoginService} from '../services/login.service';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor(
    public userDatas: GetuserdataService,
    public fireStore: AngularFirestore,
    public loginService: LoginService
  ) { }
  userData: Userdata[] = [];
 status:any;

  ngOnInit(): void {
    this.userDatas.getData().subscribe(
      data =>{
        console.log(data);
        this.userData = data
      }
    )
  }
  current = this.loginService.getUser().subscribe(user =>{
    user.uid
  }) 

  statusChange(){
    this.status = 'Received User Charity Food';
   
  }

}
