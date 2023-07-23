import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { HomeComponent } from './home/home.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { StudentResultComponent } from './student-result/student-result.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    ListStudentComponent,
    HomeComponent,
    TeacherLoginComponent,
    StudentSearchComponent,
    TeacherHomeComponent,
    StudentResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
