using palvelin.Models;

namespace palvelin.Services
{
    public interface IProductController
    {
        Product GetOrder(string id);
        List<Product> GetOrders();
        void AddProduct(Product product);
        void UpdateProduct(string id, Product product);
        void DeleteOrder(string id);
    }
}
