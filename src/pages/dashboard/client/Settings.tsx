import Layout from "./Layout";

const Settings = () => {
  return (
    <div>
      <Layout>
        <div className="flex flex-col space-y-10 px-6 py-8 bg-gray-50 rounded-lg shadow-md">
          {/* Header Section */}
          <div>
            <h1 className="text-3xl font-semibold text-indigo-700">Hindura Profile</h1>
            <p className="text-sm text-gray-500">Injiza amakuru akenewe kugira ngo uzuze profile yawe neza.</p>
          </div>

          {/* Form Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="amazina" className="text-sm font-medium text-gray-700">Amazina Yawe</label>
                <input
                  type="text"
                  id="amazina"
                  placeholder="Rukundo Eric"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="amatariki" className="text-sm font-medium text-gray-700">Amatariki y' ivuko</label>
                <input
                  type="date"
                  id="amatariki"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="igihugu" className="text-sm font-medium text-gray-700">Igihugu</label>
                <input
                  type="text"
                  id="igihugu"
                  placeholder="Rwanda"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="ibanga" className="text-sm font-medium text-gray-700">Umubare w' ibanga</label>
                <input
                  type="password"
                  id="ibanga"
                  placeholder="......"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="utuye" className="text-sm font-medium text-gray-700">Aho utuye</label>
                <input
                  type="text"
                  id="utuye"
                  placeholder="Kigali, Rwanda"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="umugi" className="text-sm font-medium text-gray-700">Umugi</label>
                <input
                  type="text"
                  id="umugi"
                  placeholder="Umugi"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Emeza
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Settings;
