import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup,FormControl} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password:string;
  username: string;
  onForm : FormGroup;
  res:any
  name:string
   

  constructor(private loginService:LoginService ,private router: Router) { 
    this.onForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),  
      })  
  }

  ngOnInit() {
    
  }
  
  async onSubmit(form: FormGroup){
    console.log('Valid?', form.valid); // true or false
    console.log('Username:', form.value.username);
    console.log('Password:', form.value.password);

    this.username = form.value.username;
    this.password = form.value.password;
    await this.loginService.login(this.username,this.password).subscribe(response =>{
    this.res=response['access_token']   
      console.log(this.res)
      this.home();    
    })}
      home(){
        
       this.loginService.home(this.res).subscribe(data=>{
        const navigationExtras: NavigationExtras = {
          state: {
            "name":data['name']
                 }
        };
         this.name = data['name']
         console.log(this.name)
        this.router.navigate(['homepage'],navigationExtras)
      })
    }
  }


