import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ClientsService } from './../../services/clients.service';
import { RouterLink } from '@angular/router';
import { EditClientPage} from '../edit-client/edit-client.page'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink]
})
export class ClientsPage implements OnInit {

  clients:any[]=[];

  constructor(private service:ClientsService,private auth:AuthService) {
  }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.clients = await this.service.getClients();
  }

  async removeClient(id: number) {
    if (confirm('¿Estás seguro que quieres eliminar este cliente?')) {
      await this.service.deleteClient(id);
      await this.service.getClients();
    }
  }
  
    async desconectar(){
    await this.auth.logout()
    alert("Sesion cerrada");
  }

  



}
