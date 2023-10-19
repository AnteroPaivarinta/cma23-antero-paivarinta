using palvelin.Models;

namespace palvelin.Repositories
{
    public interface IOrderRepository
    {
        Order GetOrder(string id);
        List<Order> GetOrders();
        void AddOrder(Order order);
        void UpdateOrder(int id, Order order);
        void DeleteOrder(string id);
        
    }
}
