import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  // state for mode setting
  const [mode, setMode] = useState("light");

  // method to change state and corresponding bg color
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#030620";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };

  // state for Alert, initially set to null
  const [alert, setAlert] = useState(null);
  // method to show alert and subsequently change the state
  let showAlert = (message, type) => {
    let newAlert = {
      message: message,
      type: type,
    };
    setAlert(newAlert);
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Rendering Components
  return (
    <>
      <BrowserRouter>
        {/* Navbar */}
        <Navbar
          title="Textutils"
          aboutTitle="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        {/* Alert */}
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  mode={mode}
                  heading="Enter Your Text Here"
                />
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
