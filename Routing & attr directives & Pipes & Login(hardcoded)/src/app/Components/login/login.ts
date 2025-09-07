import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Services } from '../services';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginobj : any = {
    username : "",
    password : ""
  }
  router = inject(Router)
  master = inject(Services)

  onlogin(){
    if(this.loginobj.username == "Admin" && this.loginobj.password == "123"){
      this.router.navigateByUrl("/admin")
      localStorage.setItem("angular20","Admin")
      this.master.onlogin.next(true);
    }else{
      alert("wrong credentials")
    }
  }
}
