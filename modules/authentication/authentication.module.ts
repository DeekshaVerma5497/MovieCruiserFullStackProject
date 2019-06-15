import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationRouterModule } from './/authentication-router.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    AuthenticationRouterModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  providers: [AuthenticationService],
  exports: [
    AuthenticationRouterModule
  ]
})
export class AuthenticationModule { }
