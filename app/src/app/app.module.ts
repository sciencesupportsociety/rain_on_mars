import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LostComponent } from './components/lost/lost.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { LoginModule } from './components/login/login.module';
import { HomeModule } from './components/home/home.module';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './components/header/header.module';
import { SurveyModule } from './components/survey/survey.module';
import { AppScope } from './shared/appScope';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LostComponent,
  ],
  providers: [AppScope],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{ path: '**', component: LostComponent }]),
    AngularFireModule.initializeApp(environment.firebase),
    HttpModule,
    FormsModule,
    LoginModule,
    HomeModule,
    HeaderModule,
    SurveyModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
