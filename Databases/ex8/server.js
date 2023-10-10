const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const db = pgp({
  connectionString: 'postgres://admin:password@localhost:5432/postgresnew'
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  db.one('INSERT INTO products(name, price) VALUES($1, $2) RETURNING id', [name, price])
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error creating product' });
    });
});

app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  db.oneOrNone('SELECT * FROM products WHERE id = $1', productId)
    .then((product) => {
      if (!product) {
        res.status(404).json({ error: 'Product not found' });
      } else {
        res.json(product);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error reading product' });
    });
});

app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const { name, price } = req.body;

  db.none('UPDATE products SET name = $1, price = $2 WHERE id = $3', [name, price, productId])
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error updating product' });
    });
});

app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  db.result('DELETE FROM products WHERE id = $1', productId)
    .then((result) => {
      if (result.rowCount === 0) {
        res.status(404).json({ error: 'Product not found' });
      } else {
        res.status(204).send();
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error deleting product' });
    });
});

app.get('/products', (req, res) => {
  db.any('SELECT * FROM products')
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error listing products' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});