import { DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-attr-directives',
  imports: [NgClass,NgStyle,UpperCasePipe,LowerCasePipe,TitleCasePipe,SlicePipe,JsonPipe,DatePipe],
  templateUrl: './attr-directives.html',
  styleUrl: './attr-directives.css'
})
export class AttrDirectives {
  classname = signal<string>("bg-success")

  firstname : string = "ammar";
  course : string = "COURSE";

  arr = [1,2,3,"rggrg",45,56]

  student : any = {
    name : "ammar",
    city : "karachi"
  }

  currentdate : Date = new Date();
}
