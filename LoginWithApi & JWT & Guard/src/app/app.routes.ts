import { Routes } from '@angular/router';
import { Login } from './Pages/login/login';
import { Layout } from './Pages/layout/layout';
import { Dashboard } from './Pages/dashboard/dashboard';
import { authGuard } from './Pages/guards/auth-guard';

export const routes: Routes = [


      {
            path : "",
            redirectTo : "login",
            pathMatch : "full"
      },
      {
            path : "login",
            component : Login
      },
      {
            path : '',
            component : Layout,
            // canDeactivate : [authGuard],
            children : [
                  {
                        path: "dashboard",
                        component : Dashboard,
                        canMatch : [authGuard]
                        
                  }
            ]
      }
];
