import React from "react";
import specials from "../special";

const Specials = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>Specials</h2>
      </div>
      <div className="cards">
        {specials.map((special) => (
          <div key={special.id} className="menu-items">
            <img src={special.image} alt={special.title} />
            <div className="menu-content">
              <div className="heading">
                <h3>{special.title}</h3>
                <p>{special.price}</p>
              </div>
              <p>{special.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specials;
