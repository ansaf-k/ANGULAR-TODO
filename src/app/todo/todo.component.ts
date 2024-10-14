import { style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { arrayTask } from './Taskarray';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  arrayTask:arrayTask[] = [];

  onSubmit(form: NgForm){
    console.log(form);

    this.arrayTask.push({
      taskName:form.controls['task'].value,
      description:form.controls['description'].value,
      isCompleted: false
    })

    form.reset();
  }

  onDelete(index:number){
    console.log(index);
    this.arrayTask.splice(index,1)
  }

  onChange(index: number){
    this.arrayTask[index].isCompleted = !this.arrayTask[index].isCompleted;
  }
}
