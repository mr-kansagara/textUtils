import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  //state for the dark/light mode.
  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been enabled", "success")

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
    }
  }



  // state for the alert components 
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {

    setAlert({
      type: type,
      message: message
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  return (

    // <>  
    //   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    //   <Alert alert={alert} />
    //   <TextForm showAlert={showAlert} heading="Enter Your Text Here" mode={mode} />
    //   {/* <About /> */}
    // </>
    <>
      {/* <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />


        <Switch>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter Your Text Here" mode={mode} />
          </Route>
          <Route path="/about">
            <About />
          </Route>

        </Switch>

      </Router> */}


      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text Here" mode={mode} />} />          
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>


    </>



  );
}

export default App;
