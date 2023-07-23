import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent {

  searchStudentForm=new FormGroup({
    strollNumber: new FormControl('',[Validators.required]),
    stname: new FormControl('',[Validators.required])
  })
  constructor(private router : Router, private service : StudentsService) { }
  

  studentSearch(){
    this.service.searchRollNumber=String(this.searchStudentForm.value.strollNumber);
    this.service.searchName=String(this.searchStudentForm.value.stname);
    //console.log(this.service.searchRollNumber,this.service.searchName);
    this.service.getstudentSearch(this.service.searchRollNumber,this.service.searchName).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['student-result']);
    },(error)=>{
      alert('Enter correct credentials');

    })
    
  }
}
