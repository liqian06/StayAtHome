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
<<<<<<< HEAD
import { HomeService } from './service/home.service';
=======
import { LoginComponent } from './login/login.component';
>>>>>>> 2913614abef4cc7834aed70905c9a396fd87b63f


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EatComponent,
    FindComponent,
    MyComponent,
    LayoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
