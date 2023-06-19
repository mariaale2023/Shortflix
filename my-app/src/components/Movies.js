import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./RestaurantList.css";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5001/restaurants");
      const data = await response.json();
      setRestaurants(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Movies</h1>
      <ul className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <li className="restaurant" key={restaurant.id}>
              <img
                className="restaurant-img"
                src={restaurant.image}
                alt={restaurant.name}
              />
              <div className="restaurant-text-box">
                <h2 className="restaurant-name">{restaurant.name}</h2>
                <p className="restaurant-description">
                  {restaurant.description}
                </p>
                <Link className="btn" to={`/restaurants/${restaurant.id}`}>
                  Reserve now
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default RestaurantList;
