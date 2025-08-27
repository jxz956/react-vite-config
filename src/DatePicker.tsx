import React, { useState, useEffect, ReactNode, JSX } from 'react';
import CustomButton from './CustomButton';

interface DatePickerProps {
  onDateChange?: (date: Date) => void;
  children?: ReactNode;
}

export function DatePicker({ onDateChange, children }: DatePickerProps): JSX.Element {
  const [currentDate, setCurrentDate] = useState<Date>(() => new Date());

  useEffect(() => {
    if (typeof onDateChange === 'function') {
      onDateChange(currentDate);
    }
  }, [currentDate, onDateChange]);

  const formatted = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const changeDate = (days: number): void => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    setCurrentDate(newDate);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <button onClick={() => changeDate(-1)}>&larr;</button>
      <CustomButton
        label={`Date: ${formatted}`}
        onClick={() => console.log(`Date: ${formatted}`)}
        style={{ padding: '8px', backgroundColor: '#eee' }}
      >
        {children}
      </CustomButton>
      <button onClick={() => changeDate(1)}>&rarr;</button>
    </div>
  );
}
