import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import StripeCheckout from 'react-stripe-checkout'

const KEY =
  'pk_test_51ISBIBATo5pJ1yVZNLZ4OF6tD1qKjmGFah3NfQZlrrA7yyqwSZDy763xuVOaNMV3D1QtWBFLJJBpqbUhnYAAYiwA00J30G5M94'

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null)
  const history = useHistory()

  const onToken = (token) => {
    // console.log(token)
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          'http://localhost:2000/api/checkout/payment',
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        )
        console.log(res.data)
        history.push('/success')
      } catch (err) {
        console.log(err)
      }
    }
    stripeToken && makeRequest()
  }, [stripeToken, history])

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {stripeToken ? (
        <span>Processing. Please wait...</span>
      ) : (
        <StripeCheckout
          name="Ongoo shop"
          image="https://images-platform.99static.com//9HhNCzl3ZiFiKSw99EX6AZeI8q8=/327x40:827x540/fit-in/500x500/99designs-contests-attachments/59/59121/attachment_59121806"
          billingAddress
          shippingAddress
          description="Your total is 20$"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              border: 'none',
              width: 120,
              borderRadius: 5,
              padding: '20px',
              backgroundColor: 'black',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Pay Now
          </button>
        </StripeCheckout>
      )}
    </div>
  )
}

export default Pay
