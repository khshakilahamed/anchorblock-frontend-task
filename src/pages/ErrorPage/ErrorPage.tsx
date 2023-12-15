import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>404</h2>
      {/* <a href="/">Home</a> */}
      <Link to="/">Home</Link>
    </div>
  );
};

export default ErrorPage;
