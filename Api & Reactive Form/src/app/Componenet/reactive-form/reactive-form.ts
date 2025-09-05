import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,AsyncPipe],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {
  userForm: FormGroup = new FormGroup({
    // Define form controls here
    userId: new FormControl(0),
    emailId: new FormControl(''),
    password: new FormControl(''),
    fullName: new FormControl(''),
    mobileNo: new FormControl(''),
  });

  http = inject(HttpClient);
  userList$: Observable<any>;

  constructor(){
    this.userList$ = this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers'); 
  }

  onSaveUser() {
    const formValue = this.userForm.value;
    console.log(this.userForm.value);
    // You can add further logic to handle form submission, e.g., sending data to a server

    // Create User and subscribe ma new method ha ye next and error wala
    this.http
      .post('https://api.freeprojectapi.com/api/GoalTracker/register', formValue)
      .subscribe({
        next: (result) => {
          alert('user creared');
        },
        error(err) {
          alert('error  aagya hay' + err);
        },
      });
  }

  onEdit(data: any) {
    
this.userForm = new FormGroup({
    // Define form controls here
    userId: new FormControl(data.userId),
    emailId: new FormControl(data.emailId),
    password: new FormControl(data.password),
    fullName: new FormControl(data.fullName),
    mobileNumber: new FormControl(data.mobileNumber),
  });
  }

  onReset() {
    this.userForm.reset()
  }
}
