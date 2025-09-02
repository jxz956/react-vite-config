import React, { JSX, useState } from 'react';
import CustomButton from './CustomButton';
import dayjs from 'dayjs';

interface DatePickerProps {
  onDateChange?: (date: Date) => void;
  children?: React.ReactNode;
}

export function DatePicker({ children, onDateChange }: DatePickerProps): JSX.Element {
  const [currentDateStr, setCurrentDateStr] = useState<string>();

  const changeDate = (days: number): void => {
    const newDate = dayjs(currentDateStr).add(days, 'day');
    setCurrentDateStr(String(newDate));
    onDateChange?.(newDate.toDate());
  };

  const formatted = dayjs(currentDateStr).format('YYYY-MM-DD');

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