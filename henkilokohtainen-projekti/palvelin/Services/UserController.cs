using Microsoft.AspNetCore.Mvc;
using palvelin.Repositories;
using palvelin.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace palvelin.Services
{
    [Authorize]
    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ICustomerRepository _userRepository;
        public UserController(ICustomerRepository userRepository, IConfiguration configuration)
        {
            _userRepository = userRepository;
            _configuration = configuration;
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

        public string GenerateToken(Account user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:SecretKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim("firstName", user.firstName),
                new Claim("lastName", user.lastName),
                new Claim("password", user.password),
                new Claim("email", user.email),
                new Claim("isAdmin", user.IsAdmin.ToString())
            };

            var token = new JwtSecurityToken(
                issuer: null,
                audience: null,
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(30),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private Account Authenticate(Account userLogin)
        {
            var currentUser = _userRepository.GetUsers().FirstOrDefault(x => x.firstName ==
                userLogin.firstName && x.password == userLogin.password && userLogin.lastName == userLogin.lastName && userLogin.IsAdmin == x.IsAdmin);
            if (currentUser != null)
            {
                return currentUser;
            }
            return null;
        }


    }
}
