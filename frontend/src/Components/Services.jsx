import React from "react";
import { Link } from "react-scroll";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/birthday.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "/anniversary.jpg",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "/camping.jpg",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "/gamenight.jpg",
      title: "Game Night Planning",
    },
    {
      id: 5,
      url: "/party.jpg",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "/wedding.jpg",
      title: "Wedding Planning",
    },
  ];

  return (
    <div className="services container">
      <h2>OUR SERVICES</h2>
      <div className="banner">
        {services.map((service) => (
          <Link key={service.id} to="contact">
            <div className="item">
              <h3>{service.title}</h3>
              <img src={service.url} alt={service.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;