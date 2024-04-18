using ClassAssignment.Entities;
using Microsoft.EntityFrameworkCore;

namespace ClassAssignment.DataBaseContext;

public class DatabaseContext : DbContext
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }
    public DbSet<Students> Students
    {
        get; set;
    }
}
