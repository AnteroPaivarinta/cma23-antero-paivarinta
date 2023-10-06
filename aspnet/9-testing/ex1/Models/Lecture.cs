namespace ex1.Models
{
    public class Lecture
    {
        int Id;
        int DateTime;
        int StartTime;
        int Length;
        Course Course;
        int CourseId;
        public Lecture(int _id, int _startTime, int _length, Course _course, int _courseId)
        {
            Id = _id;
            StartTime = _startTime;
            Length = _length;
            Course = _course;
            CourseId = _courseId;
        }
    }
}
