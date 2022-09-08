import React, { useState } from "react";
import HomePage from "./components/HomePage";
import StyleSheet from "./components/Stylesheet";
import { DatePicker } from "antd";
import ProfilePage from "./components/ProfilePage";
import UploadPage from "./components/UploadPage";
import "./App.css";
import "antd/dist/antd.min.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      {!loggedIn ? 
      <HomePage setLoggedIn={setLoggedIn}/> : <ProfilePage />}
    </div>
  );
}

export default App;
