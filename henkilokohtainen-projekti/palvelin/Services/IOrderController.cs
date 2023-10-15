using palvelin.Models;

namespace palvelin.Services
{
    public interface IOrderController
    {
        Product GetContact(int id);
        List<Product> GetContacts();
        void AddOrder(Product contact);
        void UpdateContact(int id, Product contact);
        void DeleteContact(int id);

    }
}
