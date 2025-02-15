import Layout from "./Layout";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Settings = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-500 px-6 py-8 sm:px-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              {t("profile_title")}
            </h1>
            <p className="mt-2 text-indigo-100 text-sm sm:text-base max-w-2xl">
              {t("profile_desc")}
            </p>
          </div>

          {/* Form Section */}
          <div className="px-6 py-8 sm:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="amazina" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("name_label")}
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      type="text"
                      id="amazina"
                      placeholder="Rukundo Eric"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="amatariki" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("birthdate_label")}
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      type="date"
                      id="amatariki"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="igihugu" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("country_label")}
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      type="text"
                      id="igihugu"
                      placeholder="Rwanda"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="ibanga" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("password_label")}
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      type="password"
                      id="ibanga"
                      placeholder="......"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="utuye" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("address_label")}
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      type="text"
                      id="utuye"
                      placeholder="Kigali, Rwanda"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="umugi" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("city_label")}
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      type="text"
                      id="umugi"
                      placeholder="Umugi"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row sm:justify-between space-y-4 sm:space-y-0">
              <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200">
                {t("cancel")}
              </button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md transition-colors duration-200"
              >
                {t("submit_button")}
                <svg className="ml-2 -mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Settings;