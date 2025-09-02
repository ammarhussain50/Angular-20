import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conditionalflow',
  imports: [FormsModule],
  templateUrl: './conditionalflow.html',
  styleUrl: './conditionalflow.css'
})
export class Conditionalflow {
  Isparavisible = false;
isActive: any;

  showPara() {
    this.Isparavisible = true;
  }

  hidePara() {
    this.Isparavisible = false;
  }

  startmondth : string = "feb"

  citieslist : string[] = ["karachi" , "hydrabad","islamabad"]

  students : any = [
  { name: "Ammar", city: "Karachi", isActive: true },
  { name: "Hussain", city: "Lahore", isActive: false },
  { name: "Ali", city: "Islamabad", isActive: true }
];

}
