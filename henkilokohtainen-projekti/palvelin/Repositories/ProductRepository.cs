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

        public Order GetProduct(string id)
        {
            return _context.Products.FirstOrDefault();
        }

        public List<Order> GetProducts() =>
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
        public void UpdateProduct(int id, Product newProdudct)
        {
            var product = _context.Products.FirstOrDefault((val) => val.id == id); 
            var product.price = 
            _context.Orders.Update(contact);
            _context.SaveChanges();
        }
    }
}
