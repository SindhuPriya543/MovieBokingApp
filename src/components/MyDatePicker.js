import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker = ({ onDateChange }) => {
  const [BookingDate, setBookingDate] = useState(new Date());

  const handleDateSelection = (date) => {
    const formattedDate = date ? format(date, "eee,dd MMM") : new Date();
    setBookingDate(date);
    onDateChange(formattedDate);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <DatePicker
        selected={BookingDate}
        onChange={handleDateSelection}
        className="border border-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#FFA2A0]"
        dateFormat="yyyy/MM/dd"
        placeholderText="Select a Date"
        calendarClassName="border border-[#FFA2A0]  rounded-md"
        dayClassName={(date) =>
          date.getDate() === BookingDate.getDate()
            ? "bg-yellow-500 text-white"
            : "text-gray-800"
        }
      />
    </div>
  );
};

export default MyDatePicker;
