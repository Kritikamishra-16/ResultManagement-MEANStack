import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentComponent } from './list-student/list-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { HomeComponent } from './home/home.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { StudentResultComponent } from './student-result/student-result.component';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path : 'teacher-login',
    component: TeacherLoginComponent,
    children:[
      {
        path: 'add-student',
        component: AddStudentComponent
      },
      {
        path: 'edit-student/:id',
        component: EditStudentComponent
      },
      {
        path: 'list-student',
        component: ListStudentComponent
      }
    ]
  },
  {
    path : 'teacher-home',
    component: TeacherHomeComponent,
    children:[
      {
        path: 'add-student',
        component: AddStudentComponent
      },
      {
        path: 'edit-student/:id',
        component: EditStudentComponent
      },
      {
        path: 'list-student',
        component: ListStudentComponent
      }
    ]
  },
  {
    path : 'student-search',
    component: StudentSearchComponent
  },
  {
    path : 'student-result',
    component: StudentResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
