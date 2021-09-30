import { Tarefa } from 'src/app/models/tarefa';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
})
export class TarefaService{
  
    private baseURL = "https://localhost:5001/api/tarefa";

    constructor(private http: HttpClient) {}

    list(): Observable<Tarefa[]> {
        return this.http.get<Tarefa[]>(`${this.baseURL}/listadetarefas`)
    }

    create(tarefa : Tarefa): Observable<Tarefa> {
        return this.http.post<Tarefa>(`${this.baseURL}/novatarefa`, tarefa);
    }

}