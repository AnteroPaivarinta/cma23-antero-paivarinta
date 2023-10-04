namespace ex1.Models
{
    public class Lecture
    {
        int Id, DateTime;
        int StartTime;
        int Length;
        Course Course;
        int CourseId;
        public Lecture(int a, int b, int c, int length, Course course, int courseId)
        {
            this.Id = a;
            this.StartTime = b;
            this.Length = c;
            this.Length = length;
            this.Course = course;
            this.CourseId = courseId;
        }
    }
}
