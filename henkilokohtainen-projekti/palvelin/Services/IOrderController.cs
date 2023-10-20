using palvelin.Models;

namespace palvelin.Services
{
    public interface IOrderController
    {
        List<Orderclass> GetOrders();
        void AddOrder(Orderclass order);
        void UpdateOrder(string id, Orderclass order);
        void DeleteOrder(string id);
        Orderclass GetOrder(string id);

    }
}
