import React, { useEffect, useState } from 'react';
import { getData, setClass } from './services/api';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    className: '',
    level: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form Submitted:', formData);
    try {
      const response = await setClass(formData);
      console.log('New class added: ', response);
      //Refresh data
      fetchData();
    } catch (err) {
      setError ('Failed to post class')
    }

  };

  const fetchData = async () => {
    try {
      const response = await getData();
      setData(response);
    } catch (err) {
      setError('Failed to fetch classes');
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Dancing queen</h1>
    
      <div className='newClass'>
      <h2>New class</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Class name:
          <input
          type="text"
          name="className"
          value={formData.className}
          onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Level:
          <input
          type="text"
          name="level"
          value={formData.level}
          onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit class</button>
      </form>
      </div>

      <div className='classes'>
      <h2>Classes</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {data.map((item, index) => (
          <>
            <li key={index}>{item.className}</li>
            <p key={index}>Level: {item.level}</p>
          </> 
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
