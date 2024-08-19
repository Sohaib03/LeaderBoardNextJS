import React from 'react';

export default function Activity({ boolArray }) {
  return (
    <div style={{ display: 'flex' }}>
      {boolArray.map((value, index) => (
        <div
          key={index}
          style={{
            width: '8px',
            height: '8px',
            margin: '1px',
            backgroundColor: value ? '#48c9b0' : '#FF5733 ',
          }}
        ></div>
      ))}
    </div>
  );
}