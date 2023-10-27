import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={30} color="red" className="test" defaultRating={3} />
     */}
   
  </React.StrictMode>
);
