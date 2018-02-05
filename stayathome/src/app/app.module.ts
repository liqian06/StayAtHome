import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpModule} from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EatComponent } from './eat/eat.component';
import { FindComponent } from './find/find.component';
import { MyComponent } from './my/my.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeService } from './service/home.service';
import { LoginComponent } from './login/login.component';
import { FindService } from './service/find.service';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EatComponent,
    FindComponent,
    MyComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [
    HomeService,
    FindService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
