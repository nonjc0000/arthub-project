import { Route, Routes } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Find_type from "./pages/Find_type";
import Find_map from "./pages/Find_map";
import Find_schedule from "./pages/Find_schedule";
import Blog from "./pages/Blog";
import About from "./pages/About";
import My_footprint from "./pages/My_footprint";
import Notifications from "./pages/Notifications";
import Order_management from "./pages/Order_management";
import Footer from "./components/Footer";
import Find_schedule_region_north from "./pages/Find_schedule_region_north";
import Find_schedule_region_south from "./pages/Find_schedule_region_south";
import Find_schedule_region_west from "./pages/Find_schedule_region_west";
import Find_schedule_region_east from "./pages/Find_schedule_region_east";
import BlogPost from "./pages/Blog_post";
import Stall_map from "./pages/Stall_map";
import Find_schedule_trip from './pages/Find_schedule_trip';
import Event_info from "./pages/Event_info";
import Stall_register from "./pages/Stall_register";
import Find_schedule_order from "./pages/Find_schedule_order";
import Order_success from "./pages/Order_success";
import Member_login from './pages/Member_login';
import Forgot_password from './pages/Forgot_password';
import Register from './pages/Register';
import BlogWrite from "./pages/Blog_write";
import TripBookingPage from "./pages/TripBooking";



const ArtHub_App = () => {
  return (
    <div className="wrap">
       <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Find_type" element={<Find_type />}></Route>
        <Route path="/Find_map" element={<Find_map />}></Route>
        <Route path="/Find_schedule" element={<Find_schedule />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/blog/:id" element={<BlogPost />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/My_footprint" element={<My_footprint />}></Route>
        <Route path="/Notifications" element={<Notifications />}></Route>
        <Route path="/Order_management" element={<Order_management />}></Route>
        <Route path="/North" element={<Find_schedule_region_north />}></Route>
        <Route path="/South" element={<Find_schedule_region_south />}></Route>
        <Route path="/West" element={<Find_schedule_region_west />}></Route>
        <Route path="/East" element={<Find_schedule_region_east />}></Route>
        <Route path="/blog_post/:id" element={<BlogPost />} />
        <Route path="/stall_map" element={<Stall_map />} ></Route>
        <Route path='/Trip' element={<Find_schedule_trip />}></Route>
        <Route path="/Event_info" element={<Event_info />} ></Route>
        <Route path="/Stall_register" element={<Stall_register />} ></Route>
        <Route path='/Order' element={<Find_schedule_order />}></Route>
        <Route path='/Order_success' element={<Order_success />}></Route>
        <Route path='/Member_login' element={<Member_login />}></Route>
        <Route path='/Forgot_password' element={<Forgot_password />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path="/Blog/write" element={<BlogWrite />} />
        <Route path="/TripBookingPage" element={<TripBookingPage />}></Route>
      </Routes>
      <Footer />
      </AuthProvider>
    </div>
  );
};

export default ArtHub_App;
