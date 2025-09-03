import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-attr-directives',
  imports: [NgClass,NgStyle],
  templateUrl: './attr-directives.html',
  styleUrl: './attr-directives.css'
})
export class AttrDirectives {
  classname = signal<string>("bg-success")
}
