import React, { useState } from 'react';
import './FaqAccordion.css'; // for styling (optional)

const faqData = [
  {
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    question: 'What is JSX?',
    answer: 'JSX is a syntax extension for JavaScript used with React.',
  },
  {
    question: 'What is a component?',
    answer: 'A component is a reusable piece of UI in React.',
  },
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFaq(index)}
          >
            Q: {item.question}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              A: {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
