import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES, RouterModule, Routes } from '@angular/router';
import { Part2Component } from '../part2/part2.component';


const routes : Routes = [

  {path:'part3',component:Part2Component,
data:{
  authOnly: true
}}
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)],
    exports: [
      RouterModule
    ]
  
})
export class PartModule { }
