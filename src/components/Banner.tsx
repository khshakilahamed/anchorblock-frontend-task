import { Link } from "react-router-dom";
import stack from "./../assets/images/stack.jpg";
import Button from "./Button";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${stack})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Revolutionize Your Workflow: Our Working Stack Solutions Redefine
            Efficiency and Boost Collaboration. Seamlessly integrate,
            collaborate effortlessly, and conquer every task with precision.
            Elevate your work, elevate your success!
          </p>
          <Link to="/users">
            <Button>Explore Users</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
