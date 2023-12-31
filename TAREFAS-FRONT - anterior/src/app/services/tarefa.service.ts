import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type Tarefa = {
id: string;
descricao: string;
data: Date;
urgente: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private http: HttpClient) { }
  
  getTodas() {
    return this.http.get<Tarefa[]>("http://localhost:8080/tarefas");
  }

  deletarPeloId(){
    this.http.delete("http://localhost:8080/tarefas/" + id);
  }
  }
