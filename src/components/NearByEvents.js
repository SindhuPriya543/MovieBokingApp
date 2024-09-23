import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const NearByEvents = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/events")
      .then((response) => setEventData(response.data));
  }, []);

  return (
    <div className="pt-48">
      <h1 className="text-center text-5xl"> Events </h1>
      {/* <hr className="border border-gray-300 mt-4" /> */}

      <div className="flex justify-center mt-12">
        <div className="grid grid-cols-5 gap-[4rem] ">
          {eventData && eventData.length > 0 ? (
            eventData.map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.image}
                  alt="event"
                  className="w-[20em] h-[30em] object-fill rounded-xl"
                />
                <div className="text-3xl">{item.name} </div>
              </div>
            ))
          ) : (
            <h1 className="text-3xl text-center">Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
};
