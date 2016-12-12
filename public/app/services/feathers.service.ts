import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class FeathersService{
  constructor(private _http:Http) {
     console.log('Feathers started');
  }

  getLogs() {
    return  this._http.get('http://localhost:3030/logs')
      .map(res => res.json());
  }

  addLog(log) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return  this._http.post('http://localhost:3030/logs', JSON.stringify(log), {headers: headers})
      .map(res => res.json());
  }

  removeLog(id) {
    return this._http.delete('http://localhost:3030/logs/' + id).map(res => res.json());
  }

}
