import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CodingEnvironment from "./pages/CodingEnvironment";
import InstructionTable from "./pages/InstructionTable";

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/examples/" element={<CodingEnvironment />} />
          <Route
            path="/instruction-set/"
            element={<InstructionTable />}
          />
          <Route path="/" element={<CodingEnvironment />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
