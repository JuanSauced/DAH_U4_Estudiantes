import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from './../services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.page.html',
  styleUrls: ['./view-student.page.scss'],
})
export class ViewStudentPage implements OnInit {
  public student:Student;
  constructor(private studentService:StudentService,private activatedRoute:ActivatedRoute) { 
    this.student = 
    {
      controlnumber: "",
      age: 0,
      career: "",
      curp:"",
      email:"",
      name:"",
      nip:0,
      photo:""
    }
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) =>{
      this.studentService.getStudentById(params.id).subscribe(item =>{this.student = item as Student})
    })
  }

}
