import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarTarefaComponent } from './components/views/tarefa/cadastrar-tarefa/cadastrar-tarefa.component';
import { ListarTarefaComponent } from './components/views/tarefa/listar/listar-tarefa.component';
const routes: Routes = [
    {
        path: "",
        component: ListarTarefaComponent,
    },
    {
        path: "listar/tarefa",
        component: ListarTarefaComponent,
    },
    {
        path: "cadastrar/tarefa",
        component: CadastrarTarefaComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
