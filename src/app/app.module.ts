import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './_helpers/token.interceptor';
import {ErrorInterceptor} from './_helpers/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  exports : [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
