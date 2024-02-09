import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { ApiModule, BASE_PATH } from './core/modules/openapi';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ApiModule,
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [AuthenticationService, { provide: BASE_PATH, useValue: 'http://samms.archton.io:8080' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
