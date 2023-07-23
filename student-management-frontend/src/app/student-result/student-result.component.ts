import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent {

  data:any;
  constructor(private router : Router, private service : StudentsService) {
    console.log(this.service.searchRollNumber,this.service.searchName);
    this.service.getstudentSearch(this.service.searchRollNumber,this.service.searchName).subscribe((data)=>{
      console.log(data);
      this.data = data;
    },(error)=>{
      this.router.navigate(['student-search']);
      alert('Enter correct credentials');

    })
  }

  goBack() {
    this.router.navigate(['student-search']);
  }
}
