import "./App.css";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from './pages/single/Single'
import WritePost from './components/writePost/WritePost';
import UserSettings from "./pages/userSettings/UserSettings";
import Login from './pages/login/Login';
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useContext } from "react";
import Context from "./context/Context";


function App() {
  //const userLoginStatus = false; // pseudo user.. -- used for testing..
  const { userCredentials } = useContext(Context);
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />    {/**This will be const for all pages. */}
        <Routes>
          <Route exact  path="/" element={<Home/>}/>
          <Route path="/register" element={userCredentials ? <Home/> : <Register/>}/>
          <Route path="/login" element={userCredentials ? <Home/> :<Login/>}/>
          <Route path="/about" element={<Home/>}/>
          <Route path="/write" element={userCredentials ? <WritePost/> : <Register/>}/>
          <Route path="/userSettings" element={<UserSettings/>}/>
          <Route path="/post/:postId" element={<Single/>}/> {/** No condition is needed to VIEW the post (for editing ofcourse, needed), \n with the `postId` we can fetch the required post */}
        </Routes>
        {/* <Home /> */}
        {/* <Single/> */}
        {/* <WritePost/> */}
        {/* <UserSettings/> */}
        {/* <Login/> */}
        {/* <Register/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
