using Microsoft.AspNetCore.Mvc;
using palvelin.Repositories;
using palvelin.Models;

namespace palvelin.Services
{
    [ApiController]
    [Route("api/orders")]
    public class OrderController : ControllerBase
    {

        public IOrderRepository _orderRepository;
        public OrderController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        
        [HttpGet("{id}")]
        public IActionResult GetOrderById(string id)
        {
            Order order = _orderRepository.GetOrders().FirstOrDefault(o => o.id == id);

            if (order == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(order);
            }
        }
        [HttpGet("list")]
        public IActionResult GetOrders()
        {
            List<Order> orders = _orderRepository.GetOrders();
            return Ok(orders);
        }
        [HttpPost("addOrder")]
        public void AddOrder([FromBody] Order order)
        {
            _orderRepository.AddOrder(order);
        }
        [HttpPut("{id}")]
        public void UpdateOrder(string id, Order order) {
            _orderRepository.UpdateOrder(id, order);
        }

        [HttpDelete("{id")]
        public void DeleteOrder(string id)
        {
            _orderRepository.DeleteOrder(id);
        }

    }
}
