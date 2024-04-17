// AnotherComponent.js
import React from 'react';

const AnotherComponent = ({ product }) => {
  return (
    <div>
      <h2>Products in Another Component</h2>
      <ul>
        {product.map((item) => (
          <li key={item.id}>
            <p>Title: {item.title}</p>
            <p>Description: {item.description}</p>
            <img src={item.imgURL} alt={item.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnotherComponent;
