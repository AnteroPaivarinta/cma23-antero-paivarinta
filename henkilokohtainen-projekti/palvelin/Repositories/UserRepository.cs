using palvelin.Models;

namespace palvelin.Repositories
{
    public class UserRepository : ICustomerRepository
    {

        private readonly DatabaseContext _context;
        public UserRepository(DatabaseContext context)
        {
            _context = context;
        }

        public List<Account> GetUsers() => _context.Users.ToList();
        public Account GetUser(string id) { return _context.Users.FirstOrDefault(c => c.id == id); }

        public void AddUser(Account user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public void DeleteUser(string id)
        {
            _context.Users.Remove(GetUser(id));
            _context.SaveChanges();
        }

        public void UpdateUser(string id, Account newUser)
        {
            Account user = _context.Users.FirstOrDefault((val) => val.id == id);
            user.id = newUser.id;
            user.firstName = newUser.firstName;
            user.lastName = newUser.lastName;   
            user.email= newUser.email;  
            user.isadmin = newUser.isadmin; 
            user.password = newUser.password;   
            _context.Users.Update(user);
            _context.SaveChanges();
            _context.SaveChanges();
        }

    }
}
