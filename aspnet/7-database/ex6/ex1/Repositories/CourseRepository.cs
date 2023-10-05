using ex1.Models;
using ex1.Services;

namespace ex1.Repositories
{
    public class CourseRepository: ICourseRepository
    {
        private readonly CoursesContext _context;
        public List<Course> courses { get; set; }
        public CourseRepository(CoursesContext context)
        {
            _context = context;
        }
        public List<Course> GetCourses() => _context.courses.ToList();
        public Course GetCourse(int id) =>_context.courses.FirstOrDefault(c => c.id == id);
        public void AddCourse(Course course)
        {
            _context.courses.Add(course);
            _context.SaveChanges();
        }
    }
}
