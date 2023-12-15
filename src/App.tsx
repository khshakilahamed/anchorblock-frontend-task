import { RouterProvider } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import router from "./Routes/Routes";

function App() {
  return (
    <>
      <Nav />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
