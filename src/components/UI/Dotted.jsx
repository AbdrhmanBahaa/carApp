import React from "react";
import "../../styles/dotted.css";
// import carImagebmw from  "../all-images/cars-img/mercedes-offer.png";




const dotsText = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  "Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
];

function Dotted() {
  return (
    <div className="App">
      <div className="car-image">
        {/* <img src='../all-images/cars-img/mercedes-offer.png' alt="Car" /> */}
      </div>
      <div className="dot-text">
        {dotsText.map((text, index) => (
          <div key={index} className="dot">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dotted;
