import Layout from "./Layout";
import FeatureNumber from "./pages/FeatureNumber";
import Hero from "./pages/Hero";

const App = () => {
  return (
    <>
      <Layout>
        <Hero />
        <FeatureNumber />
      </Layout>
    </>
  );
};

export default App;
