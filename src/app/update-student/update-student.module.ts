import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { UpdateStudentPageRoutingModule } from './update-student-routing.module';

import { UpdateStudentPage } from './update-student.page';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateStudentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateStudentPage]
})
export class UpdateStudentPageModule {}
