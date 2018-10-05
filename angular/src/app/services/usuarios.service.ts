import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ContactoIf } from '../models/contacto.model';

@Injectable(
   // { providedIn: 'root'}
)
export class UsuariosService {

  url: string;
  
  constructor(public http: HttpClient) { 
    this.url = environment.api_users
  }

  getLista(): Promise<Array<ContactoIf>>{
    return new Promise<Array<ContactoIf>>(
      (resolve, reject) => {
        this.http.get(this.url).toPromise()
        .then((response: any) => {
          console.dir(response as Array<ContactoIf>)
          resolve(response.results )
        }, (error) => {console.log(error)})
    })
  }
  
  async getListaAA(): Promise<Array<ContactoIf>>{
    let response:any = await this.http.get(this.url).toPromise()
    return response.results
  }
}
