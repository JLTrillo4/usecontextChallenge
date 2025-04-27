import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import MyJob from "../Pages/MyJob";
import Button from "../Components/Button";

function RoutesApp() {
return (
    <Router>
    <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/profile">Perfil</Link> |{" "}
        <Link to="/myjob">Mi Trabajo</Link> |{" "}
        <Button />
    </nav>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myjob" element={<MyJob />} />
    </Routes>
    </Router>
);
}

export default RoutesApp;