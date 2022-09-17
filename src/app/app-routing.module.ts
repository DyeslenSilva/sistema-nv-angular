import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MasterComponent } from './pages/master/master.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SignupComponent } from './pages/signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout';
const routes: Routes = [
  {path:'home',component: HomeComponent },
  {path:'login', component: LoginComponent},
  {path:'master',component:MasterComponent},
  {path:'reports', component: ReportsComponent},
  {path:'signup',component:SignupComponent},
  {path:'form', component: ReactiveFormsModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FlexLayoutModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
