import React from "react";
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51Hlfr9AqrkYgU5i24jc4cLdcOjqz2aQH27TNdJ8897x6rlGYx5prlE53sURsSa7ACtF4o6emWgETHo0P36h6Fzxt00GE1DBk2Q"

   const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }

    return (
        <StripeCheckout 
        label="Pay Now"
        name ="XXDX Clothing Ltd."
        billingAddress
        shippingAddress
        image="../../favicon.ico"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
         />
    )
}

export default StripeCheckoutButton