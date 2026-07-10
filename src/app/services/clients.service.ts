import { Injectable } from '@angular/core';
import { supabase } from '../config/supabase';
import { ClientInterface } from '../interfaces/client.interface';


@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  
  async getClients(){

    const {data,error} = await supabase 
      .from("clients")
      .select("*");

    if(error){
      throw error;
    }
    
    return data;

  }

  async getClient(id:number){
    
    const {data,error} = await supabase
      .from("clients")
      .select("*")
      .eq("id",id)
      .single()

      return data;
  }

  async addClient(client: ClientInterface){
    const{error}=await supabase
      .from("clients")
      .insert([client])

    if(error){
      throw error;
    }  
  }

  async updateClient(id:number,client:ClientInterface){
    const {error} = await supabase
      .from("clients")
      .update(client)
      .eq("id",id);

    if(error)
      throw error;  
  }

  async deleteClient(id:number){
    const {error} = await supabase
      .from("clients")
      .delete()
      .eq("id",id);

    if(error)
      throw error;  
  }





}//Cierra class ClientService
