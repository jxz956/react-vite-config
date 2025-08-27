import React, { useState, useEffect } from 'react';
import CustomButton from './CustomButton';

export function DatePicker({ onDateChange, children }) {
  const [currentDate, setCurrentDate] = useState(() => new Date());
  console.log("onDateChange prop:", onDateChange);

  useEffect(() => {
  if (typeof onDateChange == "function") {
    onDateChange(currentDate);
  }
}, [currentDate]);


  const formatted = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const changeDate = (days) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    setCurrentDate(newDate);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <button onClick={() => changeDate(-1)}>&larr;</button>
      <CustomButton label={`Date: ${formatted}`}>
        {children}
      </CustomButton>
      <button onClick={() => changeDate(1)}>&rarr;</button>
    </div>
  );
}
