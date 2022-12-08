import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private angularFirestore: AngularFirestore) {

  }
  public getStudents():Observable<Student[]>{
    return this.angularFirestore.collection('students').snapshotChanges().pipe(map(actions =>{
      return actions.map(a => {
        const data = a.payload.doc.data() as Student;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    })
    );
  }
  public getStudentById(id: string){
    let result = this.angularFirestore.collection("students").doc(id).valueChanges();
    return result;
  }
  public newStudent(student: Student){
    return this.angularFirestore.collection("students").add(student);
  }
  public async updateStudent(student:Student,id: string){
  try{
       let result = await this.angularFirestore.collection("students").doc(id).update(student);
      return result
    }catch(err){
      console.log(err);
      return null;
    }
  }
  public removeStudent(id : string){
    this.angularFirestore.collection("students").doc(id).delete();
  }
}
