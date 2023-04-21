import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

const routes: Routes = [
 { path:'home', component : FormComponent},
 {path :'header',component: HeaderComponent},
 {path:'' , redirectTo:'/home' ,pathMatch:'full'},
 {path:'**', component:FormComponent },
 {path: 'chatbot', component: ChatbotComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
