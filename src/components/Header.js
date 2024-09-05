import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../images/banner.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>RESERVE TABLE NOW!</h2>
          <p>
           PIZZA, PASTA and BURGERS!!!
          </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, facilisis himenaeos sem augue semper dignissim, habitant mi tellus neque enim eros.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>

        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
