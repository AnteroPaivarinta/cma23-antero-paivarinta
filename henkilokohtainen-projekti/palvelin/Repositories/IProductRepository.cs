using palvelin.Models;

namespace palvelin.Repositories
{
    public interface IProductRepository
    {
        Product GetProduct(string id);
        List<Product> GetProducts();    
        void AddProduct(Product product);
        void UpdateProduct(string id, Product newProduct);
        void DeleteProduct(string id);  
    }
}
