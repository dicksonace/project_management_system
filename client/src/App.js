import LandingPage from "./Pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Index from "./Pages/Admin/Index";
import StuIndex from "./Pages/Student/Index";
import SupIndex from "./Pages/Supervisor/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin/index" element={<Index />} />
        <Route path="/sup/index" element={<SupIndex />} />
        <Route path="/stu/index" element={<StuIndex />} />
      </Routes>
    </Router>
  );
}

export default App;
