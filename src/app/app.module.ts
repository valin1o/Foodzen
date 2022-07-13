import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

//login form
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

//login button
import { MatButtonModule } from '@angular/material/button';

//navbar page
import { NavBarComponent } from './nav-bar/nav-bar.component';

//navbar
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatIconModule } from '@angular/material/icon';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule, //login form - formField

    MatInputModule, //login form - input
    MatButtonModule, //login button
    MatToolbarModule, //navbar
    MatIconModule //icons
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
