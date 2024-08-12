import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/restaurant.jpg" alt="restaurant" />
      <div className="item">
        <h3>Create Sweet Memories</h3>
        <div>
          <h1>Creating Magical Memories, Just for Your</h1>
          <p>
          We understand that every event is a canvas for your biggest dreams and the smallest details.
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            style={{
              textDecoration: 'none',
              color: 'white', 
              transition: 'color 0.3s ease',
            }}
            activeStyle={{ color: 'red' }} 
          >
            <span
              onMouseOver={(e) => {
                e.target.style.color = '#dcd'; 
              }}
              onMouseOut={(e) => {
                e.target.style.color = 'white';
              }}
            >
              BOOK NOW
            </span>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;