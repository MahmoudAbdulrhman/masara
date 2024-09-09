import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavScroll from "./components/mainPage/navbar";
import Home from "./pages/Home";
import About from "./components/about/Layout";
import Center from "./components/about/center";
import Vision from "./components/about/vision";
import FooterComponent from "./components/mainPage/footer";
import OurTeam from "./components/about/ourTeam";
import Classes from "./components/classes/Layout";
import Courses from "./components/classes/courses";
import Schedule from "./components/classes/schedule";
import RegTab from "./components/regTab/Layout";
import Form from "./components/regTab/form";
import Registration from "./components/regTab/regestration";
import FAQsection from "./components/regTab/faqs";
import Events from "./components/eve/Layout";
import Masra from "./components/eve/masra";
import Community from "./components/eve/Community";
import Newsletter from "./components/nl/newsletter";
import LoginPage from "./components/portal/Login";
import DashboardPage from "./components/portal/DashboardPage";
// import PrivateRoute from "./components/portal/PrivateRoute"; 
import "./App.css";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavScroll />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />}>
              <Route path="center" element={<Center />} />
              <Route path="vision" element={<Vision />} />
              <Route path="ourTeam" element={<OurTeam />} />
            </Route>
            <Route path="classes" element={<Classes />}>
              <Route path="courses" element={<Courses />} />
              <Route path="schedule" element={<Schedule />} />
            </Route>
            <Route path="regTab" element={<RegTab />}>
              <Route path="form" element={<Form />} />
              <Route path="regestration" element={<Registration />} />
              <Route path="faqs" element={<FAQsection />} />
            </Route>
            <Route path="events" element={<Events />}>
              <Route path="masra" element={<Masra />} />
              <Route path="Community" element={<Community />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          
            <Route path="nl" element={<Newsletter />}>
              <Route path="newslatter" element={<Newsletter />} />
            </Route>
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
