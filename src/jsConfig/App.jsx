// src/App.jsx
import React from 'react';
import { DatePicker } from './DatePicker';

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: '#f0f0f0',
    }}>
      <DatePicker><span>📅</span></DatePicker>
    </div>
  );
}

export default App;
