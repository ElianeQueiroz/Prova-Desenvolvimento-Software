using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
    [ApiController]
    [Route("api/tarefa")]
    public class TarefaController : ControllerBase
    {

        private readonly Banco _context;

        public TarefaController( Banco context)
        {
            _context = context;
        }


        //Create - Adicionar entrada de Tarefa
        [HttpPost]
        [Route("novatarefa")]
        public Tarefa NovaTarefa(Tarefa tarefa)
        {     
            _context.TabelaTarefas.Add(tarefa);
            _context.SaveChanges();
            return tarefa;
        }
        
        //Read - Listar relação de Tarefa
        [HttpGet]
        [Route("listadetarefas")]
        public List<Tarefa> listadetarefas()
        {
            return (_context.TabelaTarefas.ToList());
        }

    }
}