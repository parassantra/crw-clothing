import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51ItkYbJe951YT7IdP03r3ALDxLTysonNw3CVwazaT9OGpKpTJUB7kizimYxIbtkHGFh5SR0rIG3w4iWf1UlH9n4X00br6PyRQY'
    const onToken = token =>{
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then( res => {
            alert('Payment Sucessful')
        }).catch(err => {
            console.log('Payment Error: ', JSON.parse(err))
            alert('Payment unSucessful')
        })
    }
    
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'        
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
