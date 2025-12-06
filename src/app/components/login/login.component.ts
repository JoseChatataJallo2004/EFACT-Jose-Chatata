import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CONSTANTES } from '../../Reutilizable/Constantes';
import { UtilsService } from '../../Reutilizable/utils.service';
import { Login } from '../../interfaces/Login';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{

  formularioLogin:FormGroup;
  ocultarPassword:boolean=true;
  mostrarLoading:boolean=false;

  constructor(
  private fb:FormBuilder,
  private router:Router,
  private _usuarioService:UsuarioService,
  private _utilidadService:UtilsService
  ){
    this.formularioLogin=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  iniciarSesion(){
    this.mostrarLoading=true;
    const request:Login={
      grant_type: CONSTANTES.LOGINGRANTTYPE,
      username:this.formularioLogin.value.username,
      password:this.formularioLogin.value.password
    }

    this._usuarioService.iniciarSesion(request).subscribe({
      next: (data) => {
        this._utilidadService.guardarSesion(data)
        this.router.navigate(["pages"]);},
      error: (err) => {
        const mensaje = err.error?.error_description || CONSTANTES.ERROR_DESCONOCIDO;
        this._utilidadService.mostrarAlerta(mensaje, "Opps");
      }
    });

  }
}
