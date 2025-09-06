import { Routes } from '@angular/router';
import { Admin } from './Components/admin/admin';
import { User } from './Components/user/user';
import { AttrDirectives } from './Components/attr-directives/attr-directives';
import { Login } from './Components/login/login';

export const routes: Routes = [
      {
            path: "admin",
            component : Admin
      },
      {
            path: "user",
            component: User
      },
      {
            path : "attri-directives",
            component : AttrDirectives
      },
      {
            path : "login",
            component : Login
      }
];
