using ex1.Models;
using ex1.Services;

namespace ex1.Repositories
{
    public class CourseRepository: ICourseRepository
    {
        private readonly CoursesContext _context;
        public List<Course> courses { get; set; }
        private CourseRepository(CoursesContext context)
        {
            _context = context;
           
            
        }
        public List<Course> GetCourses() => courses;
        public Course GetCourse(int id) =>_context.courses.FirstOrDefault(c => c.id == id);
        public List<Course> GetContacts() => _context.courses.ToList();
        public void AddContact(CoursesContext course)
        {
            _context.courses.Add(course);
            _context.SaveChanges();
        }




    }
}
