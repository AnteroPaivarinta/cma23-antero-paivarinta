﻿using ex1.Models;
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
        public void UpdateCourse(int id, Course newCourse)
        {
            Course course = GetCourse(id);
            course.credits = newCourse.credits;
            course.name = course.name;
            _context.courses.Update(course);
            _context.SaveChanges();
        }
        public void DeleteCourse(int id)
        {
            _context.courses.Remove(GetCourse(id));
            _context.SaveChanges();
        }
    }
}
