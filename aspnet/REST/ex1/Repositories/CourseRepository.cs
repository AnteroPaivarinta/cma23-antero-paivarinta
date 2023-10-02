using ex1.Models;
using ex1.Services;
namespace ex1.Repositories
{
    public class CourseRepository: ICourseRepository
    {
        public List<Course> courses { get; set; }
        private CourseRepository()
        {
            Course yksikurssi = new Course(0, "joo", 2);
            courses = new List<Course>();
            courses.Add(yksikurssi);
            
        }
   

        public static CourseRepository Instance { get; } = new CourseRepository();

        public List<Course> GetCourses() => courses;
        public Course GetCourse(int id) => courses.FirstOrDefault(val => val.id == id);

      

    }
}
