import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  addUser(name:string,username:string,password:string,mobile: Number){
  const newUser = new User();
    newUser.name = name;
    newUser.username = username;
    newUser.password = password;
    newUser.mobile = mobile;
    
    return this.http.post('http://localhost:3000/users', newUser);

}
}
