import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const NearByEvents = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((response) => setEventData(response.data));
  }, []);

  console.log(eventData.recipes);
  return (
    <div className="pt-28">
      <h1 className="text-center text-3xl"> Events </h1>
      <hr className="border border-black mt-2" />

      <div className="flex justify-center mt-4">
        <div className="grid grid-cols-5 gap-4">
          {eventData.recipes && eventData.recipes.length > 0 ? (
            eventData.recipes.map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.image}
                  alt="Image 1"
                  className="w-[14em] h-[20em] object-fill"
                />
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
