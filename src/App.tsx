import Layout from "./Layout";
import {Hero,FeatureNumber,Pricing} from "./pages";
import Testimonial from "./pages/Testimonial";


const App = () => {
  return (
    <>
      <Layout>
        <Hero />
        <FeatureNumber />
        <Pricing/>
        <Testimonial/>
      </Layout>
    </>
  );
};

export default App;
