using palvelin.Models;

namespace palvelin.Repositories
{
    public interface ICustomerRepository
    {
        Account GetUser(string id);
        List<Account> GetUsers();  
        void AddUser(Account user);    
        void UpdateUser(string id, Account newUser);     
        void DeleteUser(string id);
    }
}
