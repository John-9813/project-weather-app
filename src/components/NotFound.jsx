import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-5">
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist. :( </p>
      <Button className="btn btn-primary mt-5" onClick={() => navigate("/")}>
        Go Back Home
      </Button>
    </div>
  );
};

export default NotFound;
