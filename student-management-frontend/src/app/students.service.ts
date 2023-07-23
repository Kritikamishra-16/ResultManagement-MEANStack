import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  searchRollNumber : string = '';
  searchName:string ='';

  //The HttpClient module is imported from @angular/common/http in order to perform HTTP requests.
// The addStudent method is defined, which takes a student object as a parameter.
// Within the method, this.http.post() is called to make an HTTP POST request.
// The first parameter of this.http.post() is the URL of the endpoint (http://localhost:8080/endpoint/add-student in this case).
// The second parameter is the student object that will be sent as the request payload.
// The this.http.post() method returns an observable, which represents the asynchronous result of the HTTP request.
// The caller of the addStudent method can subscribe to the observable to receive the response from the server.
  constructor(private http: HttpClient) { }

  addStudent(student: any){
    //making an http post request
    return this.http.post('http://localhost:8080/endpoint/add-student', student);
  }

  listStudent(){
    return this.http.get('http://localhost:8080/endpoint/');
  }

  deleteStudent(id:any){
    return this.http.delete('http://localhost:8080/endpoint/delete-student/'+id);
  }

  singleStudent(id:any){
    return this.http.get('http://localhost:8080/endpoint/student/'+id);
  }

  updateStudent(id:any,student:any){
    return this.http.put('http://localhost:8080/endpoint/update-student/'+id, student);

  }

  getstudentSearch(sroll_number : string, sname:string): Observable<any>{
    console.log(sroll_number,sname);
    const queryParams = {
      name: sname,
      roll_number: sroll_number
    };
    return this.http.get('http://localhost:8080/endpoint/student-search', { params: queryParams }).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Unknown error occurred';
        
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`;
        }
        
        return throwError(errorMessage);;
      })
    );
  }
}
