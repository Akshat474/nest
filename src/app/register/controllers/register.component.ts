import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { RegisterService } from '../services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  profileForm: FormGroup;
  password:string;
  username: string;
  mobile: Number;
  formValues: User
  
  
  constructor(private registerService:RegisterService) {
    
   this.profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),  
    })  
  }

  ngOnInit() {}

  onSubmit(form: FormGroup){
    console.log("Hello")
    console.log('Valid?', form.valid); // true or false
    console.log('Name:', form.value.name);
    console.log('Username:', form.value.username);
    console.log('Password:', form.value.password);
    console.log('Mobile:', form.value.mobile);
    this.name = form.value.name;
    this.username = form.value.username;
    this.password = form.value.password;
    this.mobile = form.value.mobile;
    
  //console.log(this.name)
  //console.log(this.username)
  //console.log(this.password)
  //console.log(this.mobile)
    this.registerService.addUser(this.name,this.username,this.password,this.mobile).subscribe(response =>{
      console.log("Hi")
    })
    
  
}
}
