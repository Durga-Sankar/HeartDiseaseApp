import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
 { path:'home', component : FormComponent},
 {path :'header',component: HeaderComponent},
 {path:'' , redirectTo:'/home' ,pathMatch:'full'},
 {path:'**', component:FormComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
