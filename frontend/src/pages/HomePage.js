import ProductCarouselComponent from "../components/ProductCarouselComponent";
import CetegoryCardComponent from "../components/CategoryCardComponent";

const HomePage = () => {
  const categories = [
    "Tablets",
    "Monitors",
    "Cameras",
    "Textbooks",
    "Clothings",
    "Tablets",
    "Tablets",
    "Tablets",
  ]
  return (
    <>
  <ProductCarouselComponent/>;
  <CetegoryCardComponent/>
  </>
  )
};

export default HomePage;
