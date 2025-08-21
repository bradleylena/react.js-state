import React, { useState } from "react";
import "./App.css";
import Home from "./home";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      <div className="button">
        <button onClick={() => setActiveTab("home")}>Home</button>
        <button onClick={() => setActiveTab("about")}>About</button>
        <button onClick={() => setActiveTab("contact")}>Contact</button>
      </div>

      <div className="content">
        {activeTab === "home" && <Home></Home>}
        {activeTab === "about" && <p>Im working on my About</p>}
        {activeTab === "contact" && <p>Contact me through prayer</p>}
      </div>
    </div>
  );
}

export default App;
