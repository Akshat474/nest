import { Component, OnInit, Input } from '@angular/core';
import {LoginService} from '../login/services/login.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
name:string;
  constructor(private loginService: LoginService,private router:Router) { 
     this.name = this.router.getCurrentNavigation().extras.state.name

  }

  ngOnInit() {
//this.home()
  }
  
}
