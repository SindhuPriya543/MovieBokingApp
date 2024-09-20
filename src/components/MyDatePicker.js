import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form } from "react-bootstrap";

function MyDatePicker({ selectedDate, onDateChange }) {
  const [startDate, setStartDate] = useState(selectedDate);

  useEffect(() => {
    setStartDate(selectedDate);
  }, [selectedDate]);

  const handleChange = (date) => {
    setStartDate(date);
    onDateChange(date);
  };

  return (
    <div className="d-flex">
      <Form.Group controlId="datePicker">
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          className="form-control"
          dateFormat="dd MMM yyyy"
          placeholderText="Select Date"
          calendarClassName="border rounded"
          dayClassName={(date) =>
            date.getDate() === startDate.getDate()
              ? "bg-warning text-white"
              : "text-dark"
          }
        />
      </Form.Group>
    </div>
  );
}

export default MyDatePicker;