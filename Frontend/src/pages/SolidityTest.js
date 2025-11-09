import "./SolidityTest.css";

import React, { useState } from 'react';

function SolidityTest() {
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
 code: `count -= ${inputValue};`
    };

    try {
      const res = await fetch('http://127.0.0.1:8000/api/predict/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      // body: JSON.stringify(payload)
        body:JSON.stringify({"path":inputValue})

      });
      
      console.log(res)

       const data = await res.json();
       setResponseData(data);
    } catch (error) {
      console.error('POST error:', error);
      setResponseData({ error: 'Failed to fetch response' });
    } finally {
      console.log("finally");
       setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Audit Smart Contract</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Path for Smart Contract simular to C:\\Path\\code.sol"
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'audit'}
        </button>
      </form>

      <h2>Response:</h2>
      <pre>{responseData ? JSON.stringify(responseData, null, 2) : 'No response yet.'}</pre>
    </div>
  );
}

export default SolidityTest; 