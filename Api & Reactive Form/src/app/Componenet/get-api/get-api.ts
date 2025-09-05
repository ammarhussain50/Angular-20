import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-api',
  imports: [FormsModule],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi implements OnInit {
  http = inject(HttpClient);
  datalist: any[] = [];
  userlist: any[] = [];

  // yee bhi aik tareeka hay interface ki tarha ka
  userobj: {
    userId: number;
    emailId: string;
    password: string;
    fullName: string;
    mobileNo?: number; // 👈 optional number (default me undefined)
    createdDate? : Date
  } = {
    userId: 0,
    emailId: '',
    password: '',
    fullName: '',
  };

  ngOnInit(): void {
    this.getuser();
  }

  // getuser(){
  //   this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
  //     this.datalist = res;
  //     console.log(this.datalist);

  //   })
  // }

  getuser() {
    this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers').subscribe({
      next: (result: any) => {
        this.userlist = result;
      },
      error(err) {
        alert('error  aagya hay' + err);
      },
    });
  }

  onsaveuser() {
    this.http
      .post('https://api.freeprojectapi.com/api/GoalTracker/register', this.userobj)
      .subscribe({
        next: (result) => {
          alert('user creared');
        },
        error(err) {
          alert('error  aagya hay' + err);
        },
      });
  }

  onEdit(item: any) {
    this.userobj = item;
  }
  onDelete(deleteitem : any){
    const conf = confirm("do you want to delete")
    if(conf){
      this.http.delete(`https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=${deleteitem}`).subscribe({
        next: (result: any) => {
          alert("user deleted")
          this.getuser();
        },
        error(err) {
          alert('error  aagya hay' + err);
        },
      });
    }
  }

  updateuser() {
    // this.userobj.createdDate = new Date()
    this.http.put(`https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=${this.userobj.userId}`,this.userobj).subscribe({
      next: (result: any) => {
        alert("user updated")
        this.getuser();
      },
      error(err) {
        alert('error  aagya hay' + err);
      },
    });
  }

  onreset() {
     this.userobj = {
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": 0,
    };
  }
}
