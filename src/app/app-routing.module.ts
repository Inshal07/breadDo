import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDataComponent } from './user-data/user-data.component';
import { AngularFireAuthGuard,  redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';


const redirectUnauthorizedToLogin =()=> redirectUnauthorizedTo(['']);
const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'userData', component:UserDataComponent, canActivate: [AngularFireAuthGuard],  data: { authGuardPipe: redirectUnauthorizedToLogin }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
