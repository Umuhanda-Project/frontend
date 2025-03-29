import { useState } from 'react';
import axios from '../config/axios';
import { isAuthenticated } from './ProtectedRoute';
import { Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PaymentButton = ({
  subscriptionId,
  language,
  disabled,
}: {
  subscriptionId: string;
  language: string;
  disabled?: boolean;
}) => {
  const [loading, setLoading] = useState(false);
  const token = sessionStorage.getItem('token');
  const PUBLIC_KEY = import.meta.env.VITE_IPAY_PUBLIC_KEY;
  const { t } = useTranslation();

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
        { subscription_id: subscriptionId, language },
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
      disabled={loading || disabled}
      className={`w-full px-6 py-3 rounded-lg shadow-md transition-all duration-300 ${
        loading || disabled
          ? 'bg-blue-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 text-white hover:bg-blue-700'
      }`}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
        </>
      ) : (
        t('payButton')
      )}
    </button>
  );
};

export default PaymentButton;
