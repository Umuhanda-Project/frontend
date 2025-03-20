import { useTranslation } from 'react-i18next';
import Layout from '../Layout';

export const SubscriptionNotice = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <h2>ddd</h2>
      <div className="flex p-6 items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">{t('no_attempts')}</h2>
          <p className="text-gray-600 mb-4">{t('upgrade_message')}</p>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            onClick={() => {
              window.location.href = '/';
              setTimeout(() => {
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }, 100); // Wait for navigation
            }}
          >
            {t('upgrade_button')}
          </button>
        </div>
      </div>
    </Layout>
  );
};
