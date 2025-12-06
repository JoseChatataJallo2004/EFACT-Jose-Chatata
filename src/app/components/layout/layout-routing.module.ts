import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [

  {path:"",component:LayoutComponent,
    children:[
        { path: "home", component: HomeComponent },
        {path:'dashboard',component:DashboardComponent},
        { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
