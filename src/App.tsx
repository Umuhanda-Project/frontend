import Layout from "./Layout";
import {Hero,FeatureNumber,Pricing} from "./pages";
import CallToAction from "./pages/CallToAction";
import Testimonial from "./pages/Testimonial";


const App = () => {
  return (
    <>
      <Layout>
        <Hero />
        <FeatureNumber />
        <Pricing/>
        <Testimonial/>
        <CallToAction/>
      </Layout>
    </>
  );
};

export default App;
