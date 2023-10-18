using palvelin.Models;

namespace palvelin.Repositories
{
    public interface IOrderRepository
    {
        Product GetProduct(string id);
        List<Product> GetProducts();    
        void AddProduct(Product product);
        void UpdateProduct(int id, Product product);
        void DeleteProduct(string id);
    }
}
