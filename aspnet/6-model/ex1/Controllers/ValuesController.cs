using ex1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;
using System.Collections.Generic;
using ex1.Repositories;
using static System.Net.Mime.MediaTypeNames;
using System.Web.Mvc;

namespace ex1.Controllers
{
    [Route("api")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        public List<Course> listaCourses;
        public ValuesController()
        {
            Course aa = new Course(1, "joo", 5); // Korjaa kurssin arvot
            Course bb = new Course(2, "joo1", 4); // Korjaa kurssin arvot

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
            // someContent holds the content of the request body
            this.listaCourses.Add(a);
            return a;

        }

        [HttpPut("courses/{id}")]
        public List<Course> Put(int id, [FromBody] Course course)
        {
            // Contacts = list of Contact objects, fetched from some repository
            if(listaCourses.FirstOrDefault((item) => item.id == id) == null)
            {
                return new HttpNotFoundResult(); 
            }
            List<Course> updatedList = this.listaCourses.Select(c => c.id != id ? c : course).ToList();
            this.listaCourses = updatedList;
            return this.listaCourses;
        }


    }


}
