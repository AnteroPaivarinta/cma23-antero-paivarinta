using System.ComponentModel.DataAnnotations;
namespace ex1.Models
{
    public class Course
    {
        [Required]
        public int id;
        [Required]
        public string name;
        [Required]
        [MaxLength (120)]
        public int credits;
        
        public Course(int id, string name, int credits)
        {
            this.id = id;
            this.name = name;
            this.credits = credits;
        }
    }
}
