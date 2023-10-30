import React from "react";
// import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
// import StarRating from "./StarRating";
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <h2>Rating</h2>
//       <StarRating
//         color="yellow"
//         size={25}
//         maxRating={10}
//         onSetRating={setMovieRating}
//       />
      
//       <h3>This movie was rating {movieRating} stars</h3>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={30} color="red" className="test" defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);
