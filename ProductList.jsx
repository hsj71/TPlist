import React, { useState } from 'react';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '$59.99',
      description: 'High-quality over-ear wireless headphones with noise cancellation.',
      inStock: true,
    },
    {
      id: 2,
      name: 'Bluetooth Speaker',
      price: '$29.99',
      description: 'Portable speaker with deep bass and 10-hour battery life.',
      inStock: false,
    },
    {
      id: 3,
      name: 'Smart Watch',
      price: '$79.99',
      description: 'Fitness tracking smartwatch with heart-rate monitor.',
      inStock: true,
    },
  ];

  const [expandedProductIds, setExpandedProductIds] = useState([]);

  const toggleDetails = (id) => {
    setExpandedProductIds((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Product List</h2>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '12px',
          }}
        >
          <h3>{product.name}</h3>
          <p><strong>Price:</strong> {product.price}</p>
          <button onClick={() => toggleDetails(product.id)}>
            {expandedProductIds.includes(product.id) ? 'Hide Details' : 'View Details'}
          </button>
          {expandedProductIds.includes(product.id) && (
            <div style={{ marginTop: '10px' }}>
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Availability:</strong> {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
