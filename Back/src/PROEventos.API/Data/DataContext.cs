using Microsoft.EntityFrameworkCore;
using PROEventos.API.Models;

namespace PROEventos.API.Data
{
    public class DataContext : DbContext 
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }
        public DbSet<Evento> Eventos { get; set; }
    }
}