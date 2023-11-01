using Microsoft.AspNetCore.Mvc;
using palvelin.Repositories;
using palvelin.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Security.Principal;

namespace palvelin.Services
{
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
        public IActionResult GetUsers()
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

        [HttpPost("Login")]
        public IActionResult LoginUser([FromBody] Account account)
        {

            var token = GenerateToken(account);
            return Ok(token);
            
        }
        [HttpGet("Secret")]
        [Authorize] // Salli pääsy kaikille kirjautuneille käyttäjille
        public IActionResult Secret()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            var userClaims = identity.Claims;
            string firstName = userClaims.FirstOrDefault(x => x.Type == "firstName")?.Value;
            string lastName = userClaims.FirstOrDefault(x => x.Type == "lastName")?.Value;
            string email = userClaims.FirstOrDefault(x => x.Type == "email")?.Value;
            string password = userClaims.FirstOrDefault(x => x.Type == "password")?.Value;
            string id = userClaims.FirstOrDefault(x => x.Type == "id")?.Value;

            return Ok("Tervetuloa");
        }

        [HttpGet("testi")]
       
        public IActionResult Test()
        {
            return Ok("HELLO");
        }

        private string GenerateToken(Account user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim("id", user.id),
                new Claim("firstName", user.firstname),
                new Claim("lastName", user.lastname),
                new Claim("password", user.password),
                new Claim("email", user.email),
                new Claim("IsAdmin", "true")
            };

            var token = new JwtSecurityToken(
                _configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(30),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private Account Authenticate(Account userLogin)
        {
            var currentUser = _userRepository.GetUsers().FirstOrDefault(x => x.firstname ==
                userLogin.firstname && x.password == userLogin.password && userLogin.lastname == userLogin.lastname && userLogin.isadmin == x.isadmin);
            if (currentUser != null)
            {
                return currentUser;
            }
            return null;
        }


    }
}
