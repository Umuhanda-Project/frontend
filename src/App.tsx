import Layout from "./Layout";
import {Hero,FeatureNumber,Pricing} from "./pages";


const App = () => {
  return (
    <>
      <Layout>
        <Hero />
        <FeatureNumber />
        <Pricing/>
      </Layout>
    </>
  );
};

export default App;
