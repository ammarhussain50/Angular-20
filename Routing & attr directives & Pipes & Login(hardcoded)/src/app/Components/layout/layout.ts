import { Component, inject } from '@angular/core';
import { Services } from '../services';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

  // logedusername = signal<string>('');   // signal banaya
  logedusername : string = ''
  router = inject(Router)

  constructor(private master: Services) {
   
    this.readlogin()
    
      // this.logedusername.set(localdata);
      
      this.master.onlogin.subscribe(res=>{
        this.readlogin()
      })
    
  }

  readlogin(){
     const localdata = localStorage.getItem("angular20");
     if (localdata != null) {
      this.logedusername = localdata
     }
     
  }

  logoff() {
    localStorage.removeItem("angular20");
    this.logedusername = '';
    this.router.navigateByUrl('/login')
  }
}
