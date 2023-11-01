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
            modelBuilder.Entity<Account>()
       .ToTable("account")
       .HasKey(a => a.id); // Oletetaan, että "id" on pääavain

            // Määritä sarakkeiden vastaavuudet
            modelBuilder.Entity<Account>().Property(a => a.id).HasColumnName("id");
            modelBuilder.Entity<Account>().Property(a => a.firstname).HasColumnName("firstname");
            modelBuilder.Entity<Account>().Property(a => a.lastname).HasColumnName("lastname");
            modelBuilder.Entity<Account>().Property(a => a.email).HasColumnName("email");
            modelBuilder.Entity<Account>().Property(a => a.password).HasColumnName("password");
            modelBuilder.Entity<Account>().Property(a => a.isadmin).HasColumnName("isadmin");

            modelBuilder.Entity<Product>().ToTable("product");
            modelBuilder.Entity<Orderclass>().ToTable("orderclass");
        }

    }
}
