import React from "react";
import PricingPlan from "./PricingPlan";
function Plans(){

    const plans=[
        {
            planName:"plan1" ,
            price:100,
            features: ['1 User', 'Basic Support', '10GB Storage'] // This must be an array
        },
        {
            planName:"plan2" ,
            price:100,
            features: ['2 Users', 'Priority Support', '100GB Storage', 'Advanced Features']
        },
        {
            planName:"plan3",
            price:100,
            features: ['3 Users', 'Priority Support', '100GB Storage', 'Advanced Features']
        },


    ];
    return(
        <div className="pricing-plan-list">
            {plans.map((plan, index) => (
            <PricingPlan
            key={index}
            planName={plan.planName}
            price={plan.price}
            features={plan.features}
            ></PricingPlan>
            ))}
        </div>
        
    );
}
export default Plans;