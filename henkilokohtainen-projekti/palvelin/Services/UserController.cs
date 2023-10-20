using Microsoft.AspNetCore.Mvc;
using palvelin.Repositories;
using palvelin.Models;

namespace palvelin.Services
{
    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {

        public IUserRepository _userRepository;
        public UserController(IUserRepository orderRepository)
        {
            _userRepository = orderRepository;
        }


        [HttpGet("{id}")]
        public IActionResult GetUserById(string id)
        {
            User user = _userRepository.GetUsers().FirstOrDefault(o => o.id == id);

            if (user == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(user);
            }
        }
        [HttpGet("list")]
        public IActionResult GetOrders()
        {
            List<User> users = _userRepository.GetUsers();
            return Ok(users);
        }
        [HttpPost("addUser")]
        public void AddUser([FromBody] User user)
        {
            _userRepository.AddUser(user);
        }
        [HttpPut("{id}")]
        public void UpdateUser(string id, User user)
        {
            _userRepository.UpdateUser(id, user);
        }

        [HttpDelete("{id}")]
        public void DeleteUser(string id)
        {
            _userRepository.DeleteUser(id);
        }

    }
}
