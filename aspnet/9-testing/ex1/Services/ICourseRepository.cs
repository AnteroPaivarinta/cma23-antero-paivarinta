using ex1.Models;

namespace ex1.Services
{
    public interface ICourseRepository
    {
        List<Course> GetCourses();
        Course GetCourse(int id);
    }
}
