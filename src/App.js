import "./App.css";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import About from "./pages/About";
import Boxpage from "./pages/boxpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="about" element={<About />}>
          <Route path="boxpage" element={<Boxpage />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
