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
        public ValuesController()
        {
            Course aa = new Course(1, "joo", 5); 
            Course bb = new Course(2, "joo1", 4); 

            this.listaCourses = new List<Course>
            {
                aa,
                bb
            };
        }
        [HttpGet("courses/{id}")]
        public Course Get(int id)
        {
            return this.listaCourses.ElementAt(id);

        }

        [HttpGet("courses")]
        public List<Course> Get()
        {
            return CourseRepository.Instance.GetCourses();

        }
        [HttpPost]
        public Course Post([FromBody] Course a)
        {
            this.listaCourses.Add(a);
            return a;

        }

        [HttpPut("courses/{id}")]
        public List<Course> Put(int id, [FromBody] Course course)
        {
            if(listaCourses.FirstOrDefault((item) => item.id == id) == null)
            {
                return NotFound(this.listaCourses);
            }
            else
            {
                List<Course> updatedList = this.listaCourses.Select(c => c.id != id ? c : course).ToList();
                this.listaCourses = updatedList;
                return this.listaCourses;
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
                return NotFound(this.listaCourses);
            }
            patchDocument.ApplyTo(existingCourse, ModelState);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return this.listaCourses;
        }
    }
}
