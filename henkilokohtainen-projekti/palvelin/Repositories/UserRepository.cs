using palvelin.Models;

namespace palvelin.Repositories
{
    public class UserRepository : IUserRepository
    {

        private readonly DatabaseContext _context;
        public UserRepository(DatabaseContext context)
        {
            _context = context;
        }

        public List<User> GetUsers() => _context.Users.ToList();
        public User GetUser(string id) { return _context.Users.FirstOrDefault(c => c.id == id); }

        public void AddUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public void DeleteUser(string id)
        {
            _context.Users.Remove(GetUser(id));
            _context.SaveChanges();
        }

        public void UpdateUser(string id, User newUser)
        {
            User user = _context.Users.FirstOrDefault((val) => val.id == id);
            user.id = newUser.id;
            user.firstName = newUser.firstName;
            user.lastName = newUser.lastName;   
            user.email= newUser.email;  
            user.IsAdmin = newUser.IsAdmin; 
            user.password = newUser.password;   
            _context.Users.Update(user);
            _context.SaveChanges();
            _context.SaveChanges();
        }
    }
}
