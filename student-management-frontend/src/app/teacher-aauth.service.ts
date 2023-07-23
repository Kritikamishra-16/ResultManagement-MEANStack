import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TeacherAauthService {

  teacherUsername: string='teacher@gmail.com';
  teacherPassword: string='teacher@1234';

  //it uses dependency injection to inject an instance of the HttpClient service into the class.
  //HttpClient is a service provided by Angular's HttpClientModule.
  //By injecting the HttpClient service, the class can use its functionality for making HTTP requests.
  constructor(private http : HttpClient, private router: Router) { }
    //teacher login
    teacherLogin(username: any, password:any){
      if(username===this.teacherUsername && password===this.teacherPassword)
      {
        console.log('Login is successful');
        localStorage.setItem("token", (Math.random()+1).toString(36).substring(7));
        this.router.navigate(['teacher-home/list-student'])
      }
      else{
        alert('Login is failed. Wrong credentials');
        console.log('Login is failed');
        this.router.navigate(['/teacher-login'])
      }
    }

}
