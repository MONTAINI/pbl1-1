import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatProgressBarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatTableModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatSelectModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtndMgtComponent } from './atnd-mgt/atnd-mgt.component';
import { YearRegisterComponent } from './year-register/year-register.component';
import { AtndMgtService } from './atnd-mgt.service';
import { AtndMgtStudentComponent } from './atnd-mgt-student/atnd-mgt-student.component';
import { DialogComponent } from './dialog/dialog.component';
import { CalendarComponent } from './calendar/calendar.component';
import {CalendarService} from './calendar.service';


@NgModule({
  declarations: [
    AppComponent,
    AtndMgtComponent,
    YearRegisterComponent,
    AtndMgtStudentComponent,
    DialogComponent,
    CalendarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSelectModule
  ],
  entryComponents: [DialogComponent],
  providers: [AtndMgtService,CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
