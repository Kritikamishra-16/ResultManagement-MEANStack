import { Component } from '@angular/core';
import {FormBuilder,FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  addStudentForm: any;

  constructor(private fb: FormBuilder,
    private router: Router,
    private stdentService: StudentsService)
    {
      this.addStudentForm=fb.group(
        {
          roll_number: new FormControl('',[Validators.required,Validators.maxLength(5)]),
          name: new FormControl('',[Validators.required]),
          dob: new FormControl('',[Validators.required]),
          score: new FormControl('',[Validators.required, Validators.minLength(1),Validators.maxLength(3)]),
        }
      )
    }

    addStudent(){
      //console.log(this.addStudentForm.value);
      this.stdentService.addStudent(this.addStudentForm.value).subscribe((data:any)=>{
        console.log(data);
        this.router.navigate(['teacher-home/list-student']);
      });
    }

    reset(){
      this.addStudentForm.reset({
        roll_number: '',
        name: '',
        dob:'',
        score:''
      })
    }
}
