import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }
  login(username:string,password:string){
  const newUser = new User();
    newUser.username = username;
    newUser.password = password;
    
    return this.http.post('http://localhost:3000/auth/login', newUser);

}
home(res:any){
let headers = new HttpHeaders();
headers = headers.set('Authorization', 'Bearer '+ res);
      return this.http.get('http://localhost:3000/profile',{ headers: headers });
    }

}
