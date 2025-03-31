import { Link } from 'react-router-dom';
import Layout from '../pages/dashboard/client/Layout';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PaymentSuccess = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="flex items-center justify-center  mt-28 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full"
        >
          <h2 className="text-2xl font-bold text-green-600 mb-3">🎉{t('payment_success_title')}</h2>
          <p className="text-gray-700 mb-6">{t('payment_success_body')}</p>
          <Link
            to="/dashboard"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {t('payment_response_button')}
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
};

export default PaymentSuccess;
