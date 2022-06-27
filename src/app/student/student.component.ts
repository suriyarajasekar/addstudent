import { Component, OnInit } from '@angular/core';
import {FormBuilder ,FormGroup } from '@angular/forms';
import { StudentModel } from './student.model';
import { MarkService } from '../shared/mark.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  formvalue !: FormGroup;
  StudentModelobj: StudentModel = new StudentModel();
  StudentData !: any;
  constructor(private formbuilder: FormBuilder, private api: MarkService) { }

  ngOnInit(): void {
    this.formvalue = this.formbuilder.group({
      id: 0,
      name: [''],
      phoneNumber: ['']
    })
     
  }
addstudent(){
 
  this.StudentModelobj.name=this.formvalue.value.name;
  this.StudentModelobj.phoneNumber=this.formvalue.value.phoneNumber
  //alert("Name:"+this.StudentModelobj.name+"<br>"+"PhoneNumber:")

//   var newLine = "\r\n"
//   var msg ="Name:"
//   msg+=this.StudentModelobj.name;
//   msg+= newLine;
//   msg+= "PhoneNumber:"
//   msg+=this.StudentModelobj.phoneNumber;
//   msg+= newLine;
//   msg+="Added Successfully" 
//  alert(msg)

this.api.postStudent(this.StudentModelobj)
.subscribe(res => {
  console.log(res);
  alert("Student Added Successfully")
  this.formvalue.reset();
  // let ref = document.getElementById('cancel')
  // ref?.click();
  // this.formvalue.reset();
 // this.getAllEmployee();

},
  err => {
    alert("Something Went Wrong")
  })
}
}
