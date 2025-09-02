import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class Signal {
 // Normal variable
  firstname: string = "ammar";

  // Signal variables
  coursename = signal<string>("angular");
  corse = signal("videos");

  // Computed signal (auto update)
  courseetail = computed(() => this.coursename() + " " + this.corse());

  constructor() {
    // ✅ ab yeh sahi jagah hai
    setTimeout(() => {
      this.coursename.set("React");
    }, 3000);

    setTimeout(() => {
      this.firstname = "hohohohoohohohohoh"
    }, 3000);
  }

  changeFirstname() {
    this.firstname = "hussain";   // normal variable update
  }

  changeCourse() {
    this.coursename.set("react");  // signal update
  }






   // signal just like useState in React

     myVariable: string = "Hello normal";

  //signal variable
  mySignalVariable = signal("Hello Signal");

  //signal which accepts a string data
  mySignalWithReturn = signal<string>("Hello Signal");
  changeValue(): void {

    // updating normal variable
    this.myVariable = "New Normal Variable Value";

    // updating signal variable 

    //set only use when you want to replace the entire value
    this.mySignalVariable.set("New Signal Value");
    this.mySignalWithReturn.set("New Signal With Return Value");

  }
   // update only use when you want to change a part of the value exisiting value + new value

  // signal for cities
  //array
  cities = signal<string[]>(["New York", "Los Angeles", "Chicago"]);

  addCity(newCity: string) {
    this.cities.update((old: string[]) => [...old, newCity]);
    console.log("Updated Cities:", this.cities());
  }

  
  

  

  // object 

  studentObj1 = signal<any>({
    name: 'John Doe',
    city: 'New York',
    count : 2
  })

  studentObj2 = signal<any>({
    name: 'shahzeel',
    city: 'Los Angeles'
  })



  updateObj() {
  this.studentObj1.update((oldObj: any) => ({ ...oldObj, city: 'Thane' }))

  
}
  setObj() {
  this.studentObj2.set({
    name: 'AAA',
    city: 'Mumbai'
  })
    
  }
}

