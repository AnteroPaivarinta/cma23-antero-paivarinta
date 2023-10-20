using palvelin.Models;

namespace palvelin.Repositories
{
    public interface IUserRepository
    {
        User GetUser(string id);
        List<User> GetUsers();  
        void AddUser(User user);    
        void UpdateUser(string id, User newUser);     
        void DeleteUser(string id);
    }
}
