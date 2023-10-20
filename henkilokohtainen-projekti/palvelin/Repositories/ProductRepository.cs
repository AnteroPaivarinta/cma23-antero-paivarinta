using palvelin.Models;
using palvelin.Repositories;

namespace palvelin.Repositories
{
    public class ProductRepository : IProductRepository
    {

        private readonly ProductContext _context;
        public ProductRepository(ProductContext context) 
        {
            _context = context;
        }

        public Product GetProduct(string id)
        {
            return _context.Products.FirstOrDefault();
        }

        public List<Product> GetProducts() =>
            _context.Products.ToList();
        public void AddProduct(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
        }
        public void DeleteProduct(string id)
        {
            _context.Products.Remove(GetProduct(id));   
            _context.SaveChanges();
        }
        public void UpdateProduct(string id, Product newProduct)
        {
            Product product = _context.Products.FirstOrDefault((val) => val.id == id);
            product.price = newProduct.price;
            product.category = newProduct.category;
            product.id = newProduct.id;
            product.name = newProduct.name;
            _context.Products.Update(product);  
            _context.SaveChanges();
        }
    }
}
