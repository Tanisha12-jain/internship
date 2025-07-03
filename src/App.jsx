import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => setInput(input + value);

  const handleClear = () => setInput('');

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  const handleSqrt = () => {
    try {
      setInput(Math.sqrt(eval(input)).toString());
    } catch {
      setInput('Error');
    }
  };

  const btn = (value, fn = () => handleClick(value)) => (
    <button key={value} onClick={fn}>
      {value}
    </button>
  );

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h2>Calculator</h2>
      <input value={input} readOnly style={{ fontSize: 24, width: 200 }} />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 50px)',
          gap: 10,
          justifyContent: 'center',
          marginTop: 20,
        }}
      >
        {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '=', '/'].map((v) =>
          v === '=' ? btn(v, handleEqual) : btn(v)
        )}
        {btn('√', handleSqrt)}
        {btn('C', handleClear)}
      </div>
    </div>
  );
};

export default Calculator;
