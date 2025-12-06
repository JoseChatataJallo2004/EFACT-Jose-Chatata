import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class UtilsService {

  constructor(private _snackBar:MatSnackBar) { }

  mostrarAlerta(mensaje:string,tipo:string){
    this._snackBar.open(mensaje,tipo,{
      horizontalPosition:"end",
      verticalPosition:"top",
      duration:3000
    })
  }

  guardarSesion(data: any){
  localStorage.setItem("Sesion", data.access_token);
  }

  eliminarSesion(){
    localStorage.removeItem("Sesion")
  }
}
