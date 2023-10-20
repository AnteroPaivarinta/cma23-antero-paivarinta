using palvelin.Models;

namespace palvelin.Services
{
    public interface IOrderController
    {
        List<Order> GetOrders();
        void AddOrder(Order order);
        void UpdateOrder(string id, Order order);
        void DeleteOrder(string id);
        Order GetOrder(string id);

    }
}
