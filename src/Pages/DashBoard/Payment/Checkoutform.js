import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { json } from 'react-router-dom';

const Checkoutform = ({booking}) => {
    
    const [cardError,setCardError] = useState();
    const [success,setSuccess] = useState();
    const [processing,setProcessing] = useState(false);
    const [transection,setTransection] = useState('');
    const [clientSecret,setclientSecret] = useState();
    const stripe = useStripe();
    const elements = useElements();
    const {role,patient,email,_id} = booking;
    

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json" ,
            authorization:`bearer ${localStorage.getItem("accessToken")}`
        },
          body: JSON.stringify({ role }),
        })
          .then((res) => res.json())
          .then((data) => setclientSecret(data.clientSecret));
      }, [role]);

    const handleSubmit= async (event)=>{
     event.preventDefault();
     if(!stripe || !elements){
        return;
     }
     const card = elements.getElement(CardElement);

     if(card ===null){
        return ;
     }
     const {error , paymentMethod} = await stripe.createPaymentMethod({
        type:'card',
        card
     });

     if(error){
        console.log(error);
       setCardError(error.message);
     }else{
        setCardError('');
     }
     setSuccess('');
     setProcessing(true);
     const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: patient,
              email:email
            },
          },
        },
      );

      if(confirmError){
        setCardError(confirmError.message);
        return;
      }
      if(paymentIntent.status === 'succeeded'){
        console.log('card Info',card);
           setSuccess('congrats');
           setTransection(paymentIntent.id);

           const pament = {
                role,
                transectionId:paymentIntent.id,
                email,
                bookingId: _id
                       }

           fetch('http://localhost:5000/payments',{
            method:'POST',
            headers:{
                'content-type':'application/json',
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(pament)

           })
           .then(res=>res.json())
          .then(data=>{
            if(data.insertedId){
                console.log(data);
                setSuccess('congrats');
           setTransection(paymentIntent.id);
            }
          }) 
           
      }

      setProcessing(false);
    }
    return (
      <>
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-oputline mt-9 ' type="submit"
         disabled={!stripe || !clientSecret || processing}
         >
          Pay
        </button>
      </form>
      <p className='text-red-500' >{cardError}</p>
     {
        success && <div>
            <p className='text-green-600'>{success}</p>
            <p className='text-green-600'>{success}Your TransectionId:{transection}</p>
        </div>
     }
      </>
    );
};

/**
 * 1.stripe install
 * 2. cardn loadStripe
 * 3.pk publishable key
 * 3.card element
 * 4.card form
 * 5.stripe,elements
 * 6.check card error and display
 * 
 */

export default Checkoutform;