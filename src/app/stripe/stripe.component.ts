import { Component, OnInit } from '@angular/core';
import {loadStripe, Stripe} from '@stripe/stripe-js';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {

  constructor() {
  
   }

  ngOnInit(): void {
    const stripe = loadStripe('')
    .then((stripeObject)=>{
      
      if(stripeObject!=null){
        const elements = stripeObject.elements();
        
        var card = elements.create('card');
        // Add an instance of the card UI component into the `card-element`
        card.mount('#card-element');

        var cardElement = document.getElementById('card-element');

        if(cardElement!=null){
          const handleChange = async (event: { error: { message: string | null; }; }) =>{
            var displayError = document.getElementById('card-errors');
            if(displayError!=null) {
              if (event.error) {
                displayError.textContent = event.error.message;
              } else {
                displayError.textContent = '';
              }
            }
          };
          const createToken=() =>{
            stripeObject.createToken(card).then((result)=>{
              if (result.error) {
                // Inform the user if there was an error
                var errorElement = document.getElementById('card-errors');
                if(errorElement!=null) { 
                  errorElement.textContent = result.error.message !== undefined ? result.error.message : null;
                }
              } else {
                // Send the token to your server
                //stripeTokenHandler(result.token);
              }
            });
          };
        }
        function stripeTokenHandler(token: { id: string; }) {
          // Insert the token ID into the form so it gets submitted to the server
          const form = document.getElementsByTagName('form')[0];
          const hiddenInput = document.createElement('input');
          hiddenInput.setAttribute('type', 'hidden');
          hiddenInput.setAttribute('name', 'stripeToken');
          hiddenInput.setAttribute('value', token.id);
    
          if(form!=null){
            form.appendChild(hiddenInput)
              
            // Submit the form
            form.submit();
          }
         
      }
        
        //Create a token when the form is submitted.
        var form = document.getElementById('payment-form');
        if(form!=null){
          form.addEventListener('submit',(event)=>{
            event.preventDefault();
            stripeObject.createToken(card)
          });
        }
       
      }
    });
    
  }
   style = {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  };
}



