import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { CatagoryComponent } from './catagory/catagory.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskComponent } from './task/task.component';
const routes: Routes = [

 
  {path:'signup' , component: SignupComponent},
  {path:'' , component:LoginComponent},
  {path:'test' , component:SignupComponent},
  {path:'homepage' , component : HomepageComponent, canActivate:[AuthGuard]  },
  {path:'catagory' , component : CatagoryComponent},
  {path:'navbar' , component : NavbarComponent},
  {path:'login' , component:LoginComponent},
  {path:'task' , component:TaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
