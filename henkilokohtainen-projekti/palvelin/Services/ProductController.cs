using Microsoft.AspNetCore.Mvc;
using palvelin.Repositories;
using palvelin.Models;

namespace palvelin.Services
{
    [ApiController]
    [Route("api/products")]
    public class ProductController : ControllerBase
    {

        public IProductRepository _productRepository;
        public ProductController(IProductRepository productRepository) 
            {
                _productRepository = productRepository;
            }

        [HttpGet("{id}")]
        public IActionResult GetProductById(string id)
        {
            Product product = _productRepository.GetProducts().FirstOrDefault(o => o.id == id);

            if (product == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(product);
            }
        }

        [HttpGet("list")]
        public IActionResult ListProducts()
        {
            List<Product> products = _productRepository.GetProducts();
            return Ok(products);
        }

        [HttpPost("list")]
        public IActionResult AddProduct([FromBody] Product product)
        {
            _productRepository.AddProduct(product);
            return Ok("Added");
        }
    }
}