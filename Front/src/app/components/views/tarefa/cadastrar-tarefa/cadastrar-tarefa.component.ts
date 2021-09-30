import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {
  Nome! : string;
  Descricao! : string;
  Responsavel! : string;
  Data! : string;

constructor(private router: Router, private service: TarefaService) { }

ngOnInit(): void {
}

casdastrarTarefa(): void{

  let tarefa: Tarefa = {

      nome: this.Nome,
      descricao: this.Descricao,
      responsavel: this.Responsavel,
      data: this.Data,
  
  };

  this.service.create(tarefa).subscribe((pessoa) => {}); 
  
}

}
