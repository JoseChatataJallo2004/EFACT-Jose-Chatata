import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../environments/environments.dev';

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {

  private urlApi:string=environments.endpointBackend;
  private ticket:string=environments.TicketTesting;

  constructor(private http:HttpClient) { }

  //TODO:METODO PRIVADO, AUNQUE SE PUEDA CREAR OTRO ARCHIVO SOLAMENTE PARA ESTO
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem("Sesion");
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  descargarPdf() {
    return this.http.get(`${this.urlApi}/v1/pdf/${this.ticket}`, {
      headers: this.getAuthHeaders(),
      responseType: 'blob'
    });
  }

  descargarXml() {
    return this.http.get(`${this.urlApi}/v1/xml/${this.ticket}`, {
      headers: this.getAuthHeaders(),
      responseType: 'blob'
    });
  }

  descargarCdr() {
    return this.http.get(`${this.urlApi}/v1/cdr/${this.ticket}`, {
      headers: this.getAuthHeaders(),
      responseType: 'blob'
    });
  }
}
