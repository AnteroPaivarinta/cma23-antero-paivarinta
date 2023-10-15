using Microsoft.AspNetCore.Mvc;
using palvelin.Repositories;
using palvelin.Services;

namespace palvelin.Services
{
    [ApiController]
    [Route("api/joo")]
    public class OrderController : ControllerBase
    {
          
        public IOrderRepository _orderRepository;
        public OrderController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }


        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<String> Get()
        {
            return "hei";
        }
    }
}
