import React, { useEffect, useState } from "react";
import "./style.css";
import useFetch from "../../hooks/useFetch";

//fetch ->first render ->useEffect
//fetch -> dynamic -> url
//output -> api's data

const TripList = () => {
  let [url, setUrl] = useState("http://localhost:3000/trips");
  let { data: trips, loading, error } = useFetch(url, { test: "infiniteLoop" });

  return (
    <>
      <div className="container">
        <div className="flex-container">
          <h1>Ready to go ?</h1>
          {loading && <p>Loading.....</p>}
          <div>
            <button onClick={() => setUrl("http://localhost:3000/trips")}>
              {" "}
              All{" "}
            </button>
            <button
              onClick={() =>
                setUrl("http://localhost:3000/trips?location=Thailand")
              }
            >
              Trips in Thailand
            </button>
          </div>
          {error ? (
            <p>{error}</p>
          ) : (
            <ul className="trips-list">
              {trips &&
                trips.map((trip) => (
                  <li className="trip" key={trip.id}>
                    <h3>{trip.name}</h3>
                    <p>price {trip.price}</p>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default TripList;
