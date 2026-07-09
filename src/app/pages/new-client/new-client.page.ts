import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink,Router } from '@angular/router';
import { ClientInterface } from 'src/app/interfaces/client.interface';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class NewClientPage implements OnInit {

  client:ClientInterface= {
    name:'',
    email:'',
    phone:''
  };

  constructor(private service:ClientsService, private router:Router) { }

  ngOnInit() {
  }

  async save(){
    if(!this.client.email.includes("@")){
      alert("Debes introducir un correo electronico válido.");
      return;
    }
    await this.service.addClient(this.client);
    this.router.navigate(['/clients']);
  }

}
