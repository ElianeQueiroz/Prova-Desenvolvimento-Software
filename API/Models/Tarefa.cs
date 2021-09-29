using System;

namespace API.Models
{
    public class Tarefa
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string Responsavel { get; set; }
        public string Data { get; set; }
    }
}