import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "60vh" }}
    >
      <Spinner animation="border" role="status" />
    </div>
  );
};

export default Loader;