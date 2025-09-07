import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Admin } from './Components/admin/admin';
import { NgClass } from '@angular/common';
import { Services } from './Components/services';

@Component({
  selector: 'app-root',
  imports: [Admin,RouterLink,RouterOutlet,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Routing');
  // // logedusername = signal<string>('');   // signal banaya
  // logedusername : string = ''

  // constructor(private master: Services) {
   
  //   this.readlogin()
    
  //     // this.logedusername.set(localdata);
      
  //     this.master.onlogin.subscribe(res=>{
  //       this.readlogin()
  //     })
    
  // }

  // readlogin(){
  //    const localdata = localStorage.getItem("angular20");
  //    if (localdata != null) {
  //     this.logedusername = localdata
  //    }
     
  // }

  // logoff() {
  //   localStorage.removeItem("angular20");
  //   this.logedusername = '';
  // }
}
