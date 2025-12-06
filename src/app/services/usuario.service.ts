import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../environments/environments.dev';
import { Login } from '../interfaces/Login';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlApi:string=environments.endpointBackend+"oauth/token";

  private AuthorizationAuth:string=environments.AuthorizationAuth;

  constructor(private http:HttpClient) { }


  iniciarSesion(login: Login): Observable<any> {
    const body = new HttpParams()
      .set('grant_type', login.grant_type)
      .set('username', login.username)
      .set('password', login.password);
    const headers = new HttpHeaders({  'Authorization': `Basic ${this.AuthorizationAuth}`,'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post<any>(this.urlApi, body.toString(), { headers });
  }
}
