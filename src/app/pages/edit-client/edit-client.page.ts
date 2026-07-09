import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink,ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';
import { ClientInterface } from 'src/app/interfaces/client.interface';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.page.html',
  styleUrls: ['./edit-client.page.scss'],
  standalone: true,
  imports: [CommonModule,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class EditClientPage implements OnInit {

  id:number=0;
  client:ClientInterface={
    name:'',
    email:'',
    phone:''
  }
  

  constructor(private route:ActivatedRoute, private service:ClientsService, private router:Router) { 
  
  }//Cierra constructor

  ngOnInit() {
    this.loadClient()
  }

  async loadClient(){
    this.id = Number(this.route
      .snapshot
      .paramMap
      .get("id")
    );
    this.client = await this.service.getClient(this.id);

  }

  async saveClient(){
    await this.service.updateClient(this.id,this.client);
    console.log(this.client);
    this.router.navigate(['/clients']);
  }

  async deleteClient(){
    if(confirm('¿Estas seguro que quieres eliminar este cliente?'))
    await this.service.deleteClient(this.id);
    this.router.navigate(['/clients']);

  }

}
