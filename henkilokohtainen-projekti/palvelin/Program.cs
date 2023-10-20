using palvelin.Repositories;
using Microsoft.EntityFrameworkCore;
using palvelin.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddSingleton<IProductRepository, ProductRepository>();
builder.Services.AddSingleton<IOrderRepository, OrderRepository>();
builder.Services.AddSingleton<IUserRepository, UserRepository>();
builder.Services.AddDbContext<DatabaseContext>(options => options.UseNpgsql(
@"Server=PostgreSQL 12;Host=localhost;Port=5432;Username=postgres;Password=1234;Database=contacts"));
builder.Services.AddControllers().AddNewtonsoftJson();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
