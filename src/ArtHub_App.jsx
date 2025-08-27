import { Route, Routes } from "react-router-dom";
// import "./sass/all.scss";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Find_type from "./pages/Find_type";
import Find_map from "./pages/Find_map";
import Find_schedule from "./pages/Find_schedule";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Footer from "./components/Footer";
import Find_schedule_region_north from "./pages/Find_schedule_region_north";
import Find_schedule_region_south from "./pages/Find_schedule_region_south";
import Find_schedule_region_west from "./pages/Find_schedule_region_west";
import Find_schedule_region_east from "./pages/Find_schedule_region_east";
import My_footprint from "./pages/My_footprint";

const ArtHub_App = () => {
  return (
    <div className="wrap">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Find_type" element={<Find_type />}></Route>
        <Route path="/Find_map" element={<Find_map />}></Route>
        <Route path="/Find_schedule" element={<Find_schedule />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/My_footprint" element={<My_footprint/>}></Route>
        <Route path="/North" element={<Find_schedule_region_north />}></Route>
        <Route path="/South" element={<Find_schedule_region_south />}></Route>
        <Route path="/West" element={<Find_schedule_region_west />}></Route>
        <Route path="/East" element={<Find_schedule_region_east />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default ArtHub_App;
