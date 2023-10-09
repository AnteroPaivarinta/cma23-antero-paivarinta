// app.js

const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Database configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sqlpractice',
  password: 'mysecretkey',
  port: 5432,
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Define routes for CRUD operations
app.post('/products', async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const result = await pool.query(
      'INSERT INTO products (name, description, price) VALUES ($1, $2, $3) RETURNING *',
      [name, description, price]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'An error occurred while creating the product' });
  }
});

app.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error reading product:', error);
    res.status(500).json({ error: 'An error occurred while reading the product' });
  }
});

app.put('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const result = await pool.query(
      'UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *',
      [name, description, price, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'An error occurred while updating the product' });
  }
});

app.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'An error occurred while deleting the product' });
  }
});

app.get('/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (error) {
    console.error('Error listing products:', error);
    res.status(500).json({ error: 'An error occurred while listing products' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});