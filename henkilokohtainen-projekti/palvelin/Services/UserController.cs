using Microsoft.AspNetCore.Mvc;
using palvelin.Repositories;
using palvelin.Models;
using Microsoft.AspNetCore.Authorization;

namespace palvelin.Services
{
    [Authorize]
    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {

        public ICustomerRepository _userRepository;
        public UserController(ICustomerRepository orderRepository)
        {
            _userRepository = orderRepository;
        }
        [HttpGet("{id}")]

        public IActionResult GetUserById(string id)
        {
            Account user = _userRepository.GetUsers().FirstOrDefault(o => o.id == id);
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
            List<Account> users = _userRepository.GetUsers();
            return Ok(users);
        }
        [HttpPost("addUser")]
        public void AddUser([FromBody] Account user)
        {
            _userRepository.AddUser(user);
        }
        [HttpPut("{id}")]
        public void UpdateUser(string id, Account user)
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
