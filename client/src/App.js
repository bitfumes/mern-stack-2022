import { Outlet } from "react-router-dom";
import AppBar from "./components/AppBar";

function App() {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}

export default App;
