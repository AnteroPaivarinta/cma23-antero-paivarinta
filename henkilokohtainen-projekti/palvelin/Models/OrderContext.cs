﻿using Microsoft.EntityFrameworkCore;

namespace palvelin.Models
{
    public class OrderContext : DbContext
    {
        public DbSet<Order> Orders { get; set; }
        public OrderContext(DbContextOptions<OrderContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>().ToTable("Order");
        }


    }
}
