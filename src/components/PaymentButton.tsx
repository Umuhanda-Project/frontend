import { useState } from 'react';
import axios from '../config/axios';
import { isAuthenticated } from './ProtectedRoute';

const PaymentButton = ({ subscriptionId }: { subscriptionId: string }) => {
  const [loading, setLoading] = useState(false);
  const token = sessionStorage.getItem('token');
  const PUBLIC_KEY = import.meta.env.VITE_IPAY_PUBLIC_KEY;

  const handlePayment = async () => {
    setLoading(true);

    if (!isAuthenticated()) {
      window.location.href = 'http://localhost:5173/signin';
      return;
    }

    try {
      // Send request to the backend to generate invoice
      const response = await axios.post(
        '/pay',
        { subscription_id: subscriptionId },
        {
          headers: {
            'irembopay-secretKey': PUBLIC_KEY,
            'X-API-Version': '2',
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        },
      );

      if (response.data.success) {
        window.location.href = response.data.paymentUrl;
      } else {
        alert('Failed to create invoice. Please try again.');
      }
    } catch (error) {
      console.error('❌ Error fetching invoice number:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="bg-blue-600 text-white w-full px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
    >
      {loading ? 'Processing...' : 'Pay Now'}
    </button>
  );
};

export default PaymentButton;
