import './App.css';
import Calendar from './Calender';

import React, { useState } from 'react';

function App() {
  // Initialize a date state for the selected date
  const [selectedDate, setSelectedDate] = useState("03/10/2020");

  // Function to handle date selection
  const handleDateClick = (date) => {
    console.log("Current date", date);
    setSelectedDate(date)
  };

  return (
    <div className="app">
      <h1>Calendar App</h1>
      {/* Render the Calendar component and pass the selectedDate and handleDateClick function */}
      <Calendar date={selectedDate} onDateClick={handleDateClick} />
    </div>
  );
}

export default App;

