import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dessert from "./pages/Dessert";
import Home from "./pages/Home";


function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dessert" element={<Dessert/>} />
        </Routes>
    </Router>
  );
}

export default AppRouter;