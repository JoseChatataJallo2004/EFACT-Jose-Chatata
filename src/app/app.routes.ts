import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [

   {path:'',component:LoginComponent,pathMatch:"full"},
   {path:'login',component:LoginComponent,pathMatch:"full"},
   {path:'pages',canActivate:[AuthGuard],loadChildren:()=>import("./components/layout/layout.module").then(a=>a.LayoutModule)},
   {path:'**',redirectTo:'login',pathMatch:"full"}
];

@NgModule({
    declarations:[
    ],
    imports: [
        RouterModule.forChild(routes),
        BrowserModule
    ],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
