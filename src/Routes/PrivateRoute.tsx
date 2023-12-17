import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import Loading from "../components/Loading";

interface IProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IProps) => {
  const { token, isLoading } = useAppSelector((state) => state.auth);
  const location = useLocation();

  // console.log(location);

  if (isLoading) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (token && !isLoading) {
    return children;
  }

  return <Navigate to="/sign-in" state={{ from: location }} replace />;
};

export default PrivateRoute;
