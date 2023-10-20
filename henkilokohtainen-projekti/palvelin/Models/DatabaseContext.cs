using Microsoft.EntityFrameworkCore;

namespace palvelin.Models
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Account> Users { get; set; }
        public DbSet<Orderclass> Orders { get; set; }
        public DbSet<Product> Products { get; set; }
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>().ToTable("account");
            modelBuilder.Entity<Product>().ToTable("product");
            modelBuilder.Entity<Orderclass>().ToTable("orderclass");
        }

    }
}
