import Benefit from "./Benefit";
import Category from "./Category";
import FeaturedItems from "./FeaturedItems";
import Gallery from "./Gallery";
import Hero from "./Hero";

const Homepage = () => {
  return (
    <div>
      <Hero></Hero>
      <Category></Category>
      <FeaturedItems></FeaturedItems>
      <Benefit></Benefit>
      <Gallery></Gallery>
    </div>
  );
};

export default Homepage;
