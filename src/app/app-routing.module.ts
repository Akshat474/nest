import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/controllers/register.component';
import { LoginComponent } from './login/controllers/login.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [{path: '', redirectTo: 'register', pathMatch: 'full'},
                        {path: 'register',pathMatch: 'full', component: RegisterComponent },
                        {path: 'login', component: LoginComponent},{path: 'homepage', component: HomepageComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
