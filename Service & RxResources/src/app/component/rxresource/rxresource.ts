import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-rxresource',
  imports: [],
  templateUrl: './rxresource.html',
  styleUrl: './rxresource.css'
})
export class Rxresource {

  http = inject(HttpClient);

  // RxResource direct component me
  users = rxResource({
    stream: () => this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
  });

  constructor(){
    setTimeout(() => {
      this.users.reload()
    },3000);
  }
}
