namespace ex1.Models
{
    public class Lecture
    {
        public int Id { get; set; }
        public int DateTime { get; set; }
        public int StartTime { get; set; }
        public int Length { get; set; }
        public Course Course { get; set; }
        public int CourseId { get; set; }
        ICollection<Lecture> Lectures { get; set; }
        public Lecture()
        {
         
        }
    }
}
