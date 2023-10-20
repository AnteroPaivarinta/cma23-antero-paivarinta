using palvelin.Models;

namespace palvelin.Repositories
{
    public interface IOrderRepository
    {
        Orderclass GetOrder(string id);
        List<Orderclass> GetOrders();
        void AddOrder(Orderclass order);
        void UpdateOrder(string id, Orderclass order);
        void DeleteOrder(string id);
        
    }
}
