import React from 'react';
import { useState } from 'react'
import ProductList from './ProductList'
import FaqAccordion from './FaqAccordion.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  const styles = {
    main: {
      padding: '20px',
    },
    title: {
      color: '#5C6AC4'
    },
  };

  return (
    <div style={styles.main }>
      <FaqAccordion/>
      <ProductList/>
    </div>
  )
}

export default App
