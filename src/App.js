//import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from './components/About';
import React, { useState } from "react";
import Alert from "./components/Alert";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode is Enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is Enabled", "Success");
    }
  };

  // const router=createBrowserRouter([
  //   {
  //    path:"/about",
  //   //  element:<About />,
  //    element: <><Navbar /><About /></>,
  //   },
  //   {
  //    path:"/",
  //    element:<><Navbar /><Textform
  //      showAlert={showAlert}
  //      heading="Enter the text to analyse"
  //      mode={mode}></Textform></>,
  //   },
  //  ]);


  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About Textutils"
        mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert}></Alert>

      
 <div>
  <Router>
    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route  path="/" element={<Textform
      showAlert={showAlert}
     heading="Enter the text to analyse"
     mode={mode} />}></Route>
    </Routes>
  </Router>
 </div>
    </>
  );
}

export default App;
