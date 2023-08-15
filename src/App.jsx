import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { PrivateRoutes } from "./utils/PrivateRoutes";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Bookmark from "./pages/Bookmark/Bookmark";
import Profile from "./pages/Profile/Profile";
import PostDetails from "./pages/PostDetails/PostDetails";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
                containerStyle={{ top: "10%" }}
                toastOptions={{ style: { maxWidth: 500 } }}
            />
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/bookmarks" element={<Bookmark />} />
                    <Route path="/profile/:username" element={<Profile />} />
                    <Route path="/post/:postId" element={<PostDetails />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    );
}

export default App;
