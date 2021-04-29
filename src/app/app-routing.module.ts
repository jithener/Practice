import { HomeComponent } from './_components/home/home.component';
import { RegistorComponent } from './_components/registor/registor.component';
import { LoginComponent } from './_components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: LoginComponent,  },
  { path: 'login', component: LoginComponent,  },
  { path: 'registor', component: RegistorComponent },
  { path: 'home', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
