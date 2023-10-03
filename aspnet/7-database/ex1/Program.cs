using ex1.Services;
using ex1.Repositories;
using ex1.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSingleton<ICourseRepository, CourseRepository>();
builder.Services.AddDbContext<CoursesContext>(options => options.UseNpgsql(@"Server=PostgreSQL 16;Host=localhost;Port=5432;Username=postgres;Password='';Database=testi"));
builder.Services.AddScoped<ICourseRepository, CourseRepository>();
builder.Services.AddControllers().AddNewtonsoftJson();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers().AddNewtonsoftJson();


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
