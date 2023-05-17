// import MainPage from "./Components/Main Page/MainPage";
// import Airbnb from "./Components/Main Page/Airbnb";
// import Nav from "./Components/Practice Projects/Nav";
// import ImageSlider from "./Components/Practice Projects/ImageSlider";
// import BtnNavBar from "./Components/BtnNavBar";
// import MainImage from "./Components/MainImage.jsx";
// import Sidebar from "./Components/Sidebar.jsx";
// import { BrowserRouter as Router } from "react-router-dom";
// import NavBar from "./Components/NavBar.jsx";
import Homepage from "./Components/Homepage";


export default function App() {
  // const [darkMode, setDarkMode] = useState(true);

  // function toggleDarkMode() {
  //   setDarkMode((prevDarkMode) => !prevDarkMode);
  // }

  return (
    <div>
      {/* <ImageSlider /> */}
      {/* <Router>
        <Sidebar />
      </Router> */}

      {/* <Router>
        <NavBar />
      </Router> */}

      {/* <MainImage /> */}

      {/* <Router>
      <BtnNavBar />
      </Router> */}

      <Homepage />   

      {/* <div className={`h-full w-full mx-auto ${darkMode ? "dark" : ""}`}>
        <MainPage darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      </div> */}

      {/* <MainPage /> */}

      {/* <Airbnb /> */}
    </div>
  );
}
