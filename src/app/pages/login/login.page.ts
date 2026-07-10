import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class LoginPage implements OnInit {

  email:string="";
  password:string="";

  constructor(private service:AuthService, private router: Router) { }

  ngOnInit() {
  }

  async comprobar(){
    await this.service.login(this.email,this.password)
      if (true){
    this.router.navigate(['/clients'])
    alert("Sesion iniciada")}
      else{console.log("fallo de autenticacion")};
  }


}
