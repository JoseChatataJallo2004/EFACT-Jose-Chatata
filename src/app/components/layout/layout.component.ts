import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '../../Reutilizable/utils.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(
    private route:Router,
    private _utilidadService:UtilsService
  ){}

  cerrarSesion(){
    this._utilidadService.eliminarSesion();
    this.route.navigate(["login"])
  }
}
