import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { SharedModule } from "../../Reutilizable/shared/shared.module";
import { LoginComponent } from "../login/login.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule
  ]
})
export class LayoutModule { }
