import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

//login form
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//login button
import { MatButtonModule } from '@angular/material/button';

//navbar page
import { NavBarComponent } from './nav-bar/nav-bar.component';

//navbar
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatIconModule } from '@angular/material/icon';
import { ProductComponent } from './product/product.component';
import { MatCardModule } from '@angular/material/card';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MatBadgeModule } from '@angular/material/badge';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    ProductComponent,
    routingComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule, //login form - formField
    FormsModule, //login form - forms/home page
    ReactiveFormsModule, //login form
    MatInputModule, //login form - input
    MatButtonModule, //login button
    MatToolbarModule, //navbar
    MatIconModule, //icons
    MatCardModule,
    MatBadgeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
