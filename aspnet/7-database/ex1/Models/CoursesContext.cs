using Microsoft.EntityFrameworkCore;
using ex1.Models;
namespace ex1.Models
{
    public class CoursesContext : DbContext
    {

        public DbSet <Course> lista { get; set; }
        public CoursesContext(DbContextOptions<CoursesContext> options) : base(options) { }
      
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Course>().HasData(
                new Course(0, "joo", 3),
                new Course(1, "joo3", 3)
                ) ;
        }





    }
}
