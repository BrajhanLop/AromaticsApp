import { Container } from "react-bootstrap"
import ContainerFooter from "./components/footer/ContainerFooter"


import ContainerMain2 from "./components/main2/ContainerMain2"
import NavbarApp from "./components/Navbar/Navbar-App"

import { BrowserRouter } from "react-router-dom";
import AromaticasRoutes from "./routes/AromaticasRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AromaticasRoutes />
      </BrowserRouter>
    </>
  );

}

export default App;
