import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.guard';

const routes: Routes = [
 {path:'login', component:LoginComponent},
 {path:'home', component : FormComponent ,canActivate: [AuthGuard]},
 {path :'header',component: HeaderComponent , canActivate: [AuthGuard]},
 {path:'' , redirectTo:'/login' ,pathMatch:'full'},
 {path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
