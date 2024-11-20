import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // a = 20; 
  // b = 10;
  isEdit = false;
  currentIndex = 0;
  newTask = '';
  error = '';
  tasks = ["study", "coding", "gym", "diet"];
  
  add(){
    if (this.newTask!=''){
      this.error = ""
      this.tasks.push(this.newTask);
      this.newTask = '';
    }else{
      this.error = 'Please enter a value';
    }
    
  }

  delete(index: number){
    this.tasks.splice(index,1);

  }

  edit(index : number) {
    this.isEdit = true;
    this.newTask = this.tasks[index];
    this.currentIndex = index;

  }

  save(){
    this.tasks[this.currentIndex] = this.newTask;
    this.isEdit = false;
    this.newTask = '';
  }

  cancel(){
    this.isEdit = false;
    this.newTask = '';
  }
}
