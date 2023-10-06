using Microsoft.EntityFrameworkCore;
using static Npgsql.PostgresTypes.PostgresCompositeType;

namespace ex1.Models
{
    public class Course
    {
        public int id { get; set; }
        public string name { get; set; }
        public int credits { get; set; }
        public ICollection<Lecture> Lectures;
        protected void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Course>()
                .HasKey(b => b.id);
        }

        public Course(int id, string name, int credits)
        {
            this.id = id;
            this.name = name;
            this.credits = credits;
        }
    }
}
