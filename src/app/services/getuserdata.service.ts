import { Injectable } from '@angular/core';
import { Userdata } from '../shared/userdata';
import {Observable} from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class GetuserdataService {
  userData: AngularFirestoreCollection<Userdata>;
  food:Observable<any[]>;

  constructor(
    private ngFires : AngularFirestore
  ) { 
    this.food = this.ngFires.collection('PickupOrders').valueChanges();
  }
  getData(){
    return this.food
  }
}
