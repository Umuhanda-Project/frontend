import Layout from "../Layout";
import { FormEvent } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const {t} = useTranslation()

  return (
    <Layout>
      <section className="h-full flex flex-col items-center mt-16 px-4">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold text-blue-600">
            {t('contact_header')}
          </h1>
          <p className="text-gray-600 mt-2">
            {t('contact_message')}
          </p>
        </header>

        {/* Contact Form */}
        <div className="mt-10 w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
            {/* Phone Number Input */}
            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-700"
              >
                {t('phone_number')}
              </label>
              <input
                type="text"
                name="number"
                id="number"
                placeholder={t('phone_placeholder')}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                pattern="^\+?(\d.*){3,}$"
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700"
              >
                {t('message_label')}
              </label>
              <textarea
                name="text"
                id="text"
                placeholder={t('message_placeholder')}
                rows={4}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 py-3 text-white rounded-md font-medium hover:bg-blue-700 transition duration-300"
            >
              {t('submit_button')}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-10 text-center">
          <p className="text-gray-700">{t('contact_info')}</p>
          <p className="font-semibold text-blue-600 mt-2">{t('contact_number')}</p>
          <p className="font-semibold text-blue-600">{t('contact_number')}</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
