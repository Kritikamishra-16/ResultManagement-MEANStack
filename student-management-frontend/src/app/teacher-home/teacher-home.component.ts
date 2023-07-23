import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent {
  constructor(private router: Router){}

  signout(){
    localStorage.removeItem("token");
    this.router.navigate(['teacher-login']);
  }
}
