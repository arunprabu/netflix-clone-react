import React from 'react';
import './Subscription.css';

const Subscription = () => {

  let subscriptionStyles = {
    offerStyle: {
      backgroundColor: 'green',
      color: 'white',
      padding: '10px',
      fontSize: '20px'
    },
    couponStyle: {
      backgroundColor: 'grey',
      color: 'white',
      padding: '10px',
      fontSize: '20px'
    }
  }

  return (
    <div className="text-center mt-5 mb-5">
      {/* the following h4 is styled with external styles  */}
      <h4>You are an Active Subscriber</h4>
      {/* Inline Styles  */}
      <p style={ { color: 'white', backgroundColor: 'red' } }>Your Subscription Ends: 20/Dec/2021</p>

      <p style={subscriptionStyles.offerStyle}>You can renew at 50% Discount - Offer Ends Today</p>
      <p style={subscriptionStyles.couponStyle}>Use Coupon Code: OFFER50</p>
    </div>
  )
}

export default Subscription
