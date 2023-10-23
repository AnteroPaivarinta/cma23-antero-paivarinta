using ex1.Models;
using Microsoft.AspNetCore.Mvc;
using ex1.Repositories;
using Microsoft.AspNetCore.JsonPatch;

namespace ex1.Controllers
{
    [Route("api")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        public List<Course> listaCourses;
        CourseRepository courseRepository;
        public ValuesController (CourseRepository _courseRepository)
        {
            courseRepository = _courseRepository;
        }

        [HttpGet("courses/{id}")]
        public Course Get(int id)
        {
            return courseRepository.GetCourse(id);

        }

        [HttpGet("courses")]
        public List<Course> Get()
        {
            return courseRepository.GetCourses();

        }
        [HttpPost]
        public Course Post([FromBody] Course a)
        {
            courseRepository.AddCourse(a);
            return a;
        }

        [HttpPut("courses/{id}")]
        public IActionResult Put(int id, [FromBody] Course course)
        {
            var existingCourse = listaCourses.FirstOrDefault(item => item.id == id);
            if (existingCourse == null)
            {
                return NotFound();
            }
            else
            {
                List<Course> updatedList = listaCourses.Select(c => c.id != id ? c : course).ToList();
                listaCourses = updatedList;
                return Ok(updatedList); // Return a 200 OK status along with the updated list
            }
        }

        [HttpDelete("courses/delete/{id}")]
        public List<Course> Delete(int id)
        {
            
            List<Course> updatedList = listaCourses.Where(c => c.id != id).ToList();
            listaCourses = updatedList;
            return listaCourses;
        }

        [HttpPatch("courses/{id}")]
        public ActionResult<List<Course>> Patch(int id, [FromBody] JsonPatchDocument<Course> patchDocument)
        {
            Course existingCourse = listaCourses.FirstOrDefault(course => course.id == id);

            if (existingCourse == null)
            {
                return NotFound(courseRepository.courses);
            }
            patchDocument.ApplyTo(existingCourse, ModelState);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return courseRepository.courses;
        }
    }
}
