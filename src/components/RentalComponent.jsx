import React from "react";
import "./RentalComponent.css";
import LocationIcon from "../assets/locationicon.png"
import CalendarIcon from "../assets/calendaricon.png"
import CarIcon from "../assets/caricon.png"

function RentalComponent() {
  return (
    <section className="rental-component">
      <h5 className="header5">How it works</h5>
      <h2>Rent a Ride in 3 Easy Steps</h2>

      <div className="rent-features">
        <div className="rental-feature-card">
          <div className="icon-wrapper">
            <img src={LocationIcon} alt="" />
          </div>

          <h5>Choose Location</h5>
          <p>Choose your location and find your best car.</p>
        </div>
        <div className="rental-feature-card">
          <div className="icon-wrapper background-blue">
            <img src={CalendarIcon} alt="" />
          </div>

          <h5>Pick-up Date</h5>
          <p>Select your pickup date and time to book your car.</p>
        </div>

        <div className="rental-feature-card">
          <div className="icon-wrapper">
            <img src={CarIcon} alt="" />
          </div>

          <h5>Book your car</h5>
          <p>Book your car and we will deliver it to you</p>
        </div>
      </div>
    </section>
  );
}

export default RentalComponent;
