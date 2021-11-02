import React, { useState } from 'react';
import '../App.css';

const InputDetails = () => {
  const [input, setInput] = useState();

  return (
    <div style={{ padding: 30 }}>
      <form
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <label style={{ marginBottom: 10 }}>
          Height in inches
          <input type='number' name='height' style={{ marginLeft: 10 }} />
        </label>
        <label style={{ marginBottom: 10 }}>
          Weight in pounds
          <input type='number' name='weight' style={{ marginLeft: 10 }} />
        </label>
        <label style={{ marginBottom: 10 }}>
          Sex
          <select style={{ marginLeft: 10 }}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default InputDetails;
