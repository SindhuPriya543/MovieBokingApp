import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MyDatePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="flex items-center justify-center h-screen">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="border border-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#FFA2A0]"
        dateFormat="yyyy/MM/dd"
        placeholderText="Select Date"
        calendarClassName="border border-[#FFA2A0] rounded-md"
        dayClassName={(date) =>
          date.getDate() === startDate.getDate()
            ? "bg-yellow-500 text-white"
            : "text-gray-800"
        }
      />
    </div>
  );
}

export default MyDatePicker;
