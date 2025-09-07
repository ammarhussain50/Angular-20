import { Routes } from '@angular/router';
import { Admin } from './Components/admin/admin';
import { User } from './Components/user/user';
import { AttrDirectives } from './Components/attr-directives/attr-directives';
import { Login } from './Components/login/login';
import { Layout } from './Components/layout/layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'admin',
        component: Admin,
      },
      {
        path: 'user',
        component: User,
      },
      {
        path: 'attri-directives',
        component: AttrDirectives,
      },
    ],
  },
];
