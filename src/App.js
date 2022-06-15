import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interests from "./components/Interests";

import profilePic from "./assets/Profile-Pic.png";

function App() {
  return (
    <div className="container">
      <div className="card">
        <img className="profile-image" alt="test" src={profilePic} />
        <div className="text-container">
          <Info />
          <About />
          <Interests />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
