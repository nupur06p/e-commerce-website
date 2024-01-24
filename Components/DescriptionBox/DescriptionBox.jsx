import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is one that allows people to buy and sell physical goods, services, and digital 
                products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, 
                a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</p>
            <p>Types of ecommerce include business-to-consumer (B2C), business-to-business (B2B), and consumer-to-consumer (C2C). 
                Learning about the different types of ecommerce can help you determine the right model for your business.</p>
        </div>
    </div>
  )
}

export default DescriptionBox