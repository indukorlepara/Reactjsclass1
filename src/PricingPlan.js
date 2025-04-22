// src/components/PricingPlan.js
import React from 'react';

function PricingPlan({ planName, price, features }) {
  return (
    <div className="pricing-plan">
      <h2>{planName}</h2>
      <p><strong>Price:</strong> ${price}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>Choose {planName} Plan</button>
    </div>
  );
}

export default PricingPlan;
