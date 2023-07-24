import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { PrivateRoutes } from "./utils/PrivateRoutes";
import Home from "./pages/Home/Home";
// import Explore from "./pages/Explore/Explore";
// import Bookmarks from "./pages/Bookmarks/Bookmarks";
// import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
       {/* <Route path="/explore" element={<Explore />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/profile/:username" element={<Profile />} />
         <Route path="/post/:postId" element={<PostDetails />} /> */}
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
