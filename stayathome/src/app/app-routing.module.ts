import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { EatComponent } from './eat/eat.component';
import { FindComponent } from './find/find.component';
import { MyComponent } from './my/my.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailComponent } from './detail/detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
const routes: Routes = [
  {path:"",redirectTo:"layout",pathMatch:'full'},
  {path:"layout",component:LayoutComponent,
  children:[
      {path:"",redirectTo:"home",pathMatch:'full'},
      {path:"home",component:HomeComponent},
      {path:"eat",component:EatComponent},
      {path:"find",component:FindComponent},
      {path:"my",component:MyComponent}
  ]
},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"detail",component:DetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
