import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const endpoint = 'http://localhost:8080/login';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  login(username, password) {
    console.log(username, password);
    let credentials = username + ":" + password;
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Basic " + btoa(credentials))
    headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
    this.http.post(endpoint, '', { headers: headers }).subscribe(response => {
      console.log(response);
    }, err => {
      console.log("Auth failed");
    }
    );
  }
}
