import "./App.css";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from './pages/single/Single'
import WritePost from './components/writePost/WritePost';
import UserSettings from "./pages/userSettings/UserSettings";

function App() {
  return (
    <div className="App">
      <>
        <TopBar />
        {/* <Home /> */}
        {/* <Single/> */}
        {/* <WritePost/> */}
        <UserSettings/>
      </>
    </div>
  );
}

export default App;
