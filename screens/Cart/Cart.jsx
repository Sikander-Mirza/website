import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import './Cart.css';

const Cart = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Get the complete product object
  console.log(product); // Check the product details

  const [selectedPayment, setSelectedPayment] = useState('');
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handlePaymentSelection = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleProceedToPayment = async () => {
    console.log("Proceeding to payment...");
  
    // Validation checks
    if (!selectedPayment) {
      swal('Error', 'Please select a payment method!', 'error');
      return;
    }
  
    if (Object.values(userInfo).some((field) => field === '')) {
      swal('Error', 'Please fill in all the user information fields.', 'error');
      return;
    }
  
    setLoading(true);
    console.log("Validation checks passed, preparing payment data..."); // Add this line

    try {
      // Prepare payment data first
      const paymentData = {
        amount: product.priceusd,
        currency: 'BTC',
        order_id: product._id,
        order_name: product.product,
      };
      console.log(paymentData)

      // // Step 1: Send payment request to your backend first
      const paymentResponse = await axios.post(
        'https://task-crypto.vercel.app/create-payment',
        paymentData
      );
      console.log(paymentResponse);
  
      // // Step 2: Check if payment invoice URL is available
      const invoiceUrl = paymentResponse.data?.result?.invoice_url;
      if (!invoiceUrl) {
        swal('Error', 'Failed to retrieve payment invoice.', 'error');
        return;
      }

      console.log("Redirecting to payment invoice URL...");
      window.location.href = invoiceUrl;
     // Step 3: If payment is initiated successfully, create the order
      const orderData = {
        Product: product.product,        // Product name
        Price: product.priceusd,         // Product price (assuming in USD)
        Email: userInfo.email,           // User email
        Name: userInfo.name,             // User name
        phone: userInfo.phone,           // User phone
        Status: "unpaid",                // Order status (assume unpaid initially)
        Date: new Date(),                // Current date as the order date
        Imageurl: product.imageurl,      // Product image URL
      };
  
      // Step 4: Create the order after payment initialization
      const orderResponse = await axios.post(
        'https://task-crypto.vercel.app/api/orders',
        orderData
      );
  
      // Step 5: Check if order was created successfully
      if (orderResponse.status === 201 || orderResponse.status === 200) {
        swal('Success', 'Order created successfully!', 'success');
        // Redirect to the payment invoice URL
      } else {
        swal('Error', 'Failed to create order.', 'error');
      }
    } catch (error) {
      console.error('Error occurred:', error.message);
      swal('Error', 'An error occurred. Please try again later.', 'error');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="container cart-checkout" style={{ marginTop: '7rem' }}>
      <div className="card p-4 shadow-lg animated-card">
        <h2 className="text-center mb-4">Checkout</h2>

        <div className="row cart-product-section align-items-center">
          <div className="col-md-6 cart-product-details text-center">
            <img src={product.imageurl} alt={product.product} className="img-fluid mb-3" style={{ maxHeight: '250px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
            <h5 className="mb-3">{product.product}</h5>
            <p className="mb-1"><strong>ID:</strong> {product._id}</p>
            <p className="mb-3"><strong>Price (USD):</strong> ${product.priceusd}</p>

            <div className="cart-payment-method mt-4">
              <h5>Select Payment Method</h5>
              <select
                className="form-select cart-payment-select w-75 mx-auto"
                value={selectedPayment}
                onChange={handlePaymentSelection}
              >
                <option value="">Choose payment</option>
                <option value="Credit Card">💳 Credit Card</option>
                <option value="PayPal">🅿️ PayPal</option>
                <option value="Plisio">₿ Plisio</option>
                <option value="Crypto">₿ Zerocrypto</option>
              </select>
            </div>
          </div>

          <div className="col-md-6">
            <h5>User Information</h5>
            <form>
              <div className="form-group mb-3">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={userInfo.city}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label>Address</label>
                <textarea
                  name="address"
                  value={userInfo.address}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
            </form>
            <div className="cart-proceed mt-4 w-100 d-flex justify-content-center">
              <button
                className="btn btn-primary btn-lg proceed-btn mt-5"
                onClick={handleProceedToPayment}
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Checkout'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
