import { Component, inject, OnInit } from '@angular/core';
import { Master } from '../../Services/master';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {
  ///  is tarha koi bhi code reuse krskte ho aap //
  masterservices = inject(Master)

  ngOnInit(): void {
    const result = this.masterservices.getSum(2,3)
    console.log(result);
    
  }
}
