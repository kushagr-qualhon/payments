// static/main.js

console.log("Sanity check!");

// new
// Get Stripe publishable key
fetch("stripe/config/")
.then((result) => { return result.json(); })
.then((data) => {
  // Initialize Stripe.js
  console.log(data.publicKey)
  const stripe = Stripe(data.publicKey);

  document.getElementById('submitBtn').addEventListener("click", () => {
    // Get Checkout Session ID
    fetch("stripe/create-checkout-session/?payment_id=5")
    .then((result) => { return result.json(); })
    .then((data) => {
      console.log(data);
      // Redirect to Stripe Checkout
      return stripe.redirectToCheckout({sessionId: data.sessionId})
    })
    .then((res) => {
      console.log(res);
    });
  });
});

