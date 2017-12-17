import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatFormField, MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import {routing} from "./app.routing";
import { DrawerMenuComponent } from './header/drawer-menu/drawer-menu.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StudentComponent } from './signup/student/student.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    DrawerMenuComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent
  ],
  imports: [
    routing,
    MatListModule,
    MatCardModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatChipsModule,
    MatSelectModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent
  ]
})
export class AppModule { }
