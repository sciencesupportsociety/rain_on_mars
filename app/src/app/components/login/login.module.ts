import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QrReadComponent } from './qrRead/qrRead.component';
import { HeaderModule } from '../header/header.module';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'qr', component: QrReadComponent },
];

@NgModule({
  declarations: [
    LoginComponent,
    QrReadComponent,
  ],
  providers: [ LoginService ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    HeaderModule,
  ],
})

export class LoginModule {}
