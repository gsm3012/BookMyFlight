import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { flightsearchComponent } from './Pages/flightsearch/flightsearch.component';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  
  {path: 'about', component:AboutComponent  , pathMatch: 'full'},

  {path:'registration', component:RegisterComponent, pathMatch:'full'},

  {path:'login', component:LoginComponent, pathMatch:'full',},

  {path:'api/v1.0/user/flight/search', component:flightsearchComponent, pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
