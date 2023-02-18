import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// Change the height of style later
const ProductCarouselComponent = () => {
  const cursorP = {
    cursor: "pointer"
  }

  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{ height: "1000px", objectFit: "cover" }}
          src="/images/carousel/monitor.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Monitor</h3>
          </LinkContainer>

          <p>4K Resolution</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "1000px", objectFit: "cover" }}
          src="/images/carousel/tablets.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
            <h3>iPad</h3>
          </LinkContainer>
          
          <p>iPad Pro M2</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "1000px", objectFit: "cover" }}
          src="/images/carousel/camera.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
            <h3>Camera</h3>
          </LinkContainer>

          <p>
            Canon
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;
