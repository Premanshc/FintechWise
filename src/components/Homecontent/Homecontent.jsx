import React from "react";
import {Link } from "react-router-dom";
import "./Homecontent.css";

const Homecontent = () => {
  return (
    <>
      <div className="homecontent">
        <div className="leftmainbox">
          <h1>
            Your next gen <br /> <span>Finance</span> Agent
          </h1>
          <h3>
            Buy stocks, invest in mutual funds, and learn how to handle your
            money. Purchase equities, put money into mutual funds, and develop
            good money management skills.
          </h3>

          <button>
            Get started
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/windows/32/ffffff/up-left-arrow.png"
              alt="up-left-arrow"
            />
          </button>

          <button className="active">
            Contact sales
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/windows/32/ffffff/up-left-arrow.png"
              alt="up-left-arrow"
            />
          </button>
        </div>
        <div className="rightmainbox">
          <img src="/credit-cards.png" />
        </div>
      </div>
      {/* <div className="companylogo">
        <marquee direction="left">
          <img src="/full_width.png" alt="logo" />
        </marquee>
      </div> */}
      <div className="offersection">
        <div className="offerbox">
        <div className="linebar">
        </div>
        <h1>Browse our set of finance <br /> services and offerings</h1>
        <div className="buttons">
        <button>
            Get started
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/windows/32/ffffff/up-left-arrow.png"
              alt="up-left-arrow"
            />
          </button>
          <button className="active">
            Contact sales
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/windows/32/000000/up-left-arrow.png"
              alt="up-left-arrow"
            />
          </button>
          </div>
        </div>
      </div>

      <div className="offercards">

        <Link to="/textgen">
        <div className="cardbox">
          <h1>AI Advisor</h1>
          <h3>An AI advisor streamlines financial decisions with personalized recommendations.</h3>
        </div>
        </Link>

        <a href="">
        <div className="cardbox">
          <h1>Expenditure Forecast</h1>
          <h3>Expenditure forecasts use historical data and trends to project future spending patterns</h3>
        </div>
        </a>

        <a href="">
        <div className="cardbox">
          <h1>Budget Analyzer</h1>
          <h3>A budget analyzer provides a quick overview of your financial health and spending habits.</h3>
        </div>
        </a>


        {/* <a href="">
        <div className="cardbox">
          <h1>Expenditure Forecast</h1>
          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum cum doloribus culpa doloremque id minima sint qui excepturi eos maxime?</h3>
        </div>
        </a> */}
      </div>
      
    </>
  );
};

export default Homecontent;
