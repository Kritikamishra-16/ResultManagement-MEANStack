import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { TeacherAauthService } from '../teacher-aauth.service';


@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent {
  teacherLoginData=new FormGroup({
    username: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  constructor(private teacherAauth: TeacherAauthService){}


  teacherLoginFun(){
    this.teacherAauth.teacherLogin(this.teacherLoginData.value.username, this.teacherLoginData.value.password)
  }

}
