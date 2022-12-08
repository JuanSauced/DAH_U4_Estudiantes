import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { NewStudentPageRoutingModule } from './new-student-routing.module';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NewStudentPage } from './new-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewStudentPageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [NewStudentPage]
})
export class NewStudentPageModule {}
