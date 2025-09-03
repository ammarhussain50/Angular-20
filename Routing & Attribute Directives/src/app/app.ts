import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Admin } from './Components/admin/admin';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Admin,RouterLink,RouterOutlet,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Routing');
}
