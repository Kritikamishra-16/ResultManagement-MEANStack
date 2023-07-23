import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {

  studentsList:any;

  constructor(private studentService:StudentsService,
    private router: Router)
  {

  }

  ngOnInit(): void{
    this.loadStudent();
  }

  loadStudent(){
    this.studentService.listStudent().subscribe((data:any)=>{
      console.log(data);
      this.studentsList=data;
    })
  }

  deleteStudent(student:any){
    this.studentService.deleteStudent(student._id).subscribe((data)=>{
      console.log(data);
      this.studentsList= this.studentsList.filter((u:any)=>u!==student);
    })
  }
}
