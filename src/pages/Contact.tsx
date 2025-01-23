import Layout from "../Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="h-full flex flex-col items-center mt-16 px-4">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold text-blue-600">
            Twandikire cyangwa uduhamagare
          </h1>
          <p className="text-gray-600 mt-2">
            Twohereze ubutumwa cyangwa duhamagare kuri nimero zacu.
          </p>
        </header>

        {/* Contact Form */}
        <div className="mt-10 w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <form className="flex flex-col space-y-6">
            {/* Phone Number Input */}
            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-700"
              >
                Nimero yawe ya telephone
              </label>
              <input
                type="text"
                name="number"
                id="number"
                placeholder="Andika nimero yawe ya telephone"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700"
              >
                Ubutumwa bwawe
              </label>
              <textarea
                name="text"
                id="text"
                placeholder="Andika ubutumwa hano"
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
              Ohereza Ubutumwa
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-10 text-center">
          <p className="text-gray-700">Cyangwa uduhamagare kuri:</p>
          <p className="font-semibold text-blue-600 mt-2">+250 787 787 878</p>
          <p className="font-semibold text-blue-600">+250 787 787 878</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
