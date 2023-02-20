import ProductCarouselComponent from "../components/ProductCarouselComponent";
import CetegoryCardComponent from "../components/CategoryCardComponent";
import {Row,Container} from "react-bootstrap";

const HomePage = () => {
  const categories = [
    "Tablets",
    "Monitors",
    "Games",
    "Printers",
    "Software",
    "Cameras",
    "Books",
    "Videos",
    "Clothings",
    "Shoes",
    "Accessories",
    "Furniture",
  ];
  return (
    <>
      <ProductCarouselComponent />
      <Container>
      <Row xs={1} md={3} className="g-4 mt-5">
        {categories.map((category, idx) => (
          <CetegoryCardComponent key={idx} category={category} idx={idx}/>
        ))}
      </Row>
      </Container>
    </>
  );
};

export default HomePage;
