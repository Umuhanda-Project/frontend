import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import logo from "../../assets/Umuhanda_logo.png";
import authSignin from "../../assets/auth1.png";

const ResetPassword = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            {/* Left Section */}
            <div className="flex-1 bg-gray-50 p-8 lg:p-4 flex flex-col">
                {/* Language Switcher */}
               

                {/* Logo */}
                <img src={logo} alt="Umuhanda Logo" className="w-40 mb-8" />

                {/* Reset Password Form */}
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
                        {t("resetPassword")}
                    </h1>
                    <form className="w-full max-w-md p-6 rounded-lg space-y-6">
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                {t("phoneNumber")}
                            </label>
                            <input
                                type="number"
                                id="number"
                                placeholder={t("enterPhoneNumber")}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition"
                                onClick={() => navigate("/verificationcode")}
                            >
                                {t("submit")}
                            </button>
                        </div>
                        <button
                            type="button"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition"
                            onClick={() => navigate("/signup")}
                        >
                            {t("createAccount")}
                        </button>
                    </form>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex-1 hidden lg:block">
                <img
                    src={authSignin}
                    alt="Auth Illustration"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
};

export default ResetPassword;
