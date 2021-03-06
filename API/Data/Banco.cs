using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class Banco:  DbContext
    {
        public Banco(DbContextOptions<Banco> options) : base(options){}

        public DbSet<Tarefa> TabelaTarefas { get; set; }
    }
}