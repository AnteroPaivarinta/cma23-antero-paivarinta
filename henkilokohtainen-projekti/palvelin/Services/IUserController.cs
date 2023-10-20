using palvelin.Models;

namespace palvelin.Services
{
    public interface IUserController
    {
        List<User> GetUsers();
        void AddUser(User user);
        void UpdateUser(string id, User user);
        void DeleteUser(string id);
        User GetUser(string id);

    }
}
