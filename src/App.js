import React, {useState} from 'react';
import './App.css';
import { Form } from 'semantic-ui-react';

const api = {
  //Enter you API key
  key: "",
  base: "http://api.openweathermap.org/data/2.5/weather?q"
}

function App() {
  const [userInput, setUserInput] = useState('');
  const [weather, setWeather] = useState('');

  const handleSubmit = () => {
    fetch(`${api.base}=${userInput}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          // setError(data.message)
          console.log(data.message);
        }
        else {
          setWeather(data);
          console.log(data);
        }
      })
  }

    const handleSearch = (e) => {
    if (e.target.value !== "") {
    setUserInput(e.target.value)
    }
    }
  
  return (
    <div className="search">
          <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='Name'
              name='name'
              onChange={handleSearch}
            />
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
    </div>
  );
}

export default App;
