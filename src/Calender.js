import React, { useState, useEffect } from 'react';

// Helper function to get the first day of the month
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

// Helper function to get the last day of the month
function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

// Helper function to generate an array of numbers from start to end
function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

// Days of the week
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = ({ date, onDateClick }) => {
  const dateParts = date.split('/');
  const dateObj = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // Month is 0-based
  const [year, setYear] = useState(dateObj.getFullYear());
  const [month, setMonth] = useState(dateObj.getMonth());
  const [selectedDate, setSelectedDate] = useState(dateObj.getDate());

  useEffect(() => {
    setYear(dateObj.getFullYear());
    setMonth(dateObj.getMonth());
    setSelectedDate(dateObj.getDate());
  }, [dateObj]);

  const firstDay = getFirstDayOfMonth(year, month);
  const lastDay = getLastDayOfMonth(year, month);

  const handleOnDateChange = (date)=>{
    setSelectedDate(date)


    onDateClick(`${date}/${month+1}/${year}`);
    // onDateClick(new Date(year,month, date))
  }

  // Calculate the number of empty cells before the first day of the month
  const emptyCells = new Array(firstDay).fill(null);

  return (
    <div className="calendar">
      <div className="calendar-header">
        <span>{dateObj.toLocaleString('default', { month: 'long' })} {year}</span>
      </div>
      <div className="calendar-days">
        {daysOfWeek.map(day => (
          <div key={day} className="calendar-day">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-dates">
        {emptyCells.map((_, index) => (
          <div key={`empty-${index}`} className="calendar-date empty">
            {''}
          </div>
        ))}
        {range(1, lastDay).map(day => (
          <div
            key={day}
            className={`calendar-date ${day === selectedDate ? 'selected' : ''}`}
            onClick={() => handleOnDateChange(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
