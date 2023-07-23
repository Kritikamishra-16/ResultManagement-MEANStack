import { Component } from '@angular/core';
import {FormBuilder,FormGroup, FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {

  addStudentForm: any;
  id:any;
  date:any;


  constructor(private fb: FormBuilder,
    private router: Router,
    private stdentService: StudentsService,
    private url: ActivatedRoute)
    {
      this.addStudentForm=this.fb.group(
        {
          roll_number: new FormControl('',[Validators.required,Validators.maxLength(5)]),
          name: new FormControl('',[Validators.required]),
          dob: new FormControl('',[Validators.required]),
          score: new FormControl('',[Validators.required, Validators.minLength(1),Validators.maxLength(3)]),
        }
      )
    }

    ngOnInit():void{
      //this.url.snapshot.params['id'] is an Angular statement used to retrieve the value of the id parameter from the current route's URL.
      //snapshot: Represents the current state of the route. It provides access to the route's parameters, data, and other information at the time the component is initialized.
      this.id=this.url.snapshot.params['id']; //shoud be id only as route isdefined in app-routing file
      //console.log(this.id);
      this.stdentService.singleStudent(this.id).subscribe((data)=>{
        console.log(data);
        this.addStudentForm.patchValue(data);

        this.date=data;
        console.log(this.date.dob);
        const formattedDate = this.formatDates(this.date.dob);
        //this.addStudentForm.get('dob').setValue(formattedDate);
      })
    }
    
    formatDates(apiDate: string): string {
      const parts = apiDate.split('-');
      const year = parts[2];
      const month = parts[1];
      const day = parts[0];
      return `${year}-${month}-${day}`;
    }

    updateStudent(){
      //console.log(this.addStudentForm.value);
      this.stdentService.updateStudent(this.id,this.addStudentForm.value).subscribe((data:any)=>{
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
