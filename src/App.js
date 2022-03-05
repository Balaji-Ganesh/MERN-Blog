import "./App.css";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from './pages/single/Single'

function App() {
  return (
    <div className="App">
      <>
        <TopBar />
        {/* <Home /> */}
        <Single/>
      </>
    </div>
  );
}

export default App;
