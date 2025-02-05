import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import logo from "../../assets/Umuhanda_logo.png";
import authSignin from "../../assets/auth1.png";

const Signin = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Initialize translation

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div className="flex-1 bg-gray-50 p-8 lg:p-4 flex flex-col">
        {/* Logo */}
        <img src={logo} alt={t("alt.logo")} className="w-40 mb-8" />

        {/* Sign-In Form */}
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
            {t("signin.title")}
          </h1>
          <form className="w-full max-w-md bg-white p-6 rounded-lg space-y-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t("signin.phone_label")}
              </label>
              <input
                type="text"
                id="phone"
                placeholder={t("signin.phone_placeholder")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t("signin.password_label")}
              </label>
              <input
                type="password"
                id="password"
                placeholder={t("signin.password_placeholder")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition"
                onClick={() => navigate("/client")}
              >
                {t("signin.login")}
              </button>
              <button
                type="button"
                className="text-blue-500 hover:underline text-sm"
                onClick={() => navigate("/reset")}
              >
                {t("signin.forgot_password")}
              </button>
            </div>
            <button
              type="button"
              className="w-full bg-gray-100 py-3 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition"
              onClick={() => navigate("/signup")}
            >
              {t("signin.create_account")}
            </button>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 hidden lg:block">
        <img
          src={authSignin}
          alt={t("signin.auth_image")}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Signin;
