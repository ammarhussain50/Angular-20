import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  course_name : String = "angular";
  product_price : Number = 121212;
  maxlengths: number = 5;
  minlength : number = 3;
  inptype : string = "text"
  myClass: string = "secondary";
  isActive: boolean = false;
  myclassname : string = "mycolor";

  constructor(){

  }

   showAlert():void{
    alert('alert!');
  }

  //aesi function ki example
  anotherFunction(name:string):string{

    return name;
  }

  changevalue(){
    this.course_name = "jnsnjasnjasnajns"
  }

  changecity(){
    alert("city changed")
  }


  
}
