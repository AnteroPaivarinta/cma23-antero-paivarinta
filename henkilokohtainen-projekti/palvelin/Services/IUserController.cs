using palvelin.Models;

namespace palvelin.Services
{
    public interface IUserController
    {
        List<Account> GetUsers();
        void AddUser(Account user);
        void UpdateUser(string id, Account user);
        void DeleteUser(string id);
        Account GetUser(string id);

    }
}
