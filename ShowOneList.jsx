import React, { useState } from 'react';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: '$999',
      description: 'A powerful laptop for work and gaming.',
      inStock: true,
    },
    {
      id: 2,
      name: 'Phone',
      price: '$599',
      description: 'A smartphone with a great camera.',
      inStock: false,
    },
    {
      id: 3,
      name: 'Headphones',
      price: '$199',
      description: 'Noise-cancelling over-ear headphones.',
      inStock: true,
    },
  ];

  const [visibleId, setVisibleId] = useState(null);

  const toggleDetails = (id) => {
    setVisibleId(visibleId === id ? null : id);
  };

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <p><strong>{product.name}</strong> - {product.price}</p>
          <button onClick={() => toggleDetails(product.id)}>
            {visibleId === product.id ? 'Hide Details' : 'View Details'}
          </button>
          {visibleId === product.id && (
            <div>
              <p>{product.description}</p>
              <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
