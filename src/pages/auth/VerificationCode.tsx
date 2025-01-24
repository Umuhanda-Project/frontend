import { useNavigate } from "react-router";
import logo from "../../assets/Umuhanda_logo.png";
import authSignin from "../../assets/auth1.png";

const VerificationCode = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div className="flex-1 bg-gray-50 p-8 lg:p-4 flex flex-col ">
        {/* Logo */}
        <img src={logo} alt="Umuhanda Logo" className="w-40 mb-8" />

        {/* Sign-In Form */}
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Injiramo
          </h1>
          <form className="w-full max-w-md p-6 rounded-lg  space-y-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Injiza code
              </label>
              <input
                type="number"
                id="number"
                placeholder="Injiza nimera ya code"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
             </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Injiramo
              </button>
             
            </div>
            <button
              type="button"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition"
              onClick={() => navigate('/signup')}
            >
              Kora Konti
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

export default VerificationCode;
