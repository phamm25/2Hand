import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddedToCartMessageComponent = ({ showCartMessage, setShowCartMessage }) => {
  const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

  return (
    <Alert
      show={showCartMessage}
      variant="success"
      onClose={() => setShowCartMessage(false)}
      dismissible
    >
      <Alert.Heading>The product was added to your cart!</Alert.Heading>
      <p>
        <Button variant="danger" onClick={goBack}>Go back</Button>{" "}
        <Link to="/cart">
          <Button variant="success">Go to cart</Button>
        </Link>
      </p>
    </Alert>
  );ss
};

export default AddedToCartMessageComponent;

