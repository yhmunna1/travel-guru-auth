import React from "react";
import homeBG from "../../assets/Rectangle 1.png";
import slide1 from "../../assets/Sajek.png";
import slide2 from "../../assets/Sreemongol.png";
import slide3 from "../../assets/sundorbon.png";

import { FaArrowRight } from "react-icons/fa6";
import NavbarWhite from "../Shared/Navbar/NavbarWhite";

const Home = () => {
  const handleBooking = () => {
    console.log("Booking");
  };
  return (
    <div className="relative h-screen w-full">
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${homeBG})`,
          filter: "brightness(0.3)",
        }}
      ></div>
      <div className="relative z-10 h-full max-w-6xl mx-auto">
        <NavbarWhite></NavbarWhite>
        <div className="flex items-center mt-52 gap-6">
          {/* Left side */}
          <div className="space-y-4 w-1/2">
            <h1 className="font-bebasneue font-semibold text-6xl text-white uppercase">
              Cox's bazar
            </h1>
            <p className="text-white">
              Cox's Bazar is a city, fishing port, tourism centre and district
              headquarters in southeastern Bangladesh. It is famous mostly for
              its long natural sandy beach, and it ...
            </p>
            <button onClick={handleBooking} className="btn btn-warning">
              Booking <FaArrowRight />
            </button>
          </div>

          {/* Right Side */}
          <div>
            <div className="carousel rounded-box space-x-5">
              <div className="carousel-item">
                <img className="w-64 h-96" src={slide1} alt="Burger" />
              </div>
              <div className="carousel-item">
                <img className="w-64 h-96" src={slide2} alt="Burger" />
              </div>
              <div className="carousel-item">
                <img className="w-64 h-96" src={slide3} alt="Burger" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
