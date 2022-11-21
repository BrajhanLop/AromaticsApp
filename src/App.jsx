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
