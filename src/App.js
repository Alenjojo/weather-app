import React, {useState} from 'react';
import './App.scss';
import { Form } from 'semantic-ui-react';
import Icon from './components/icon'
import Weather from './components/Weather';

const api = {
  //Enter you API key
  key: "",
  base: "http://api.openweathermap.org/data/2.5/weather?q"
}

function App() {
  const [userInput, setUserInput] = useState('');
  const [weatherData, setWeatherData] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    fetch(`${api.base}=${userInput}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          // setError(data.message)
          console.log(data.message);
          setError(data.message);
          setWeatherData(null);
        }
        else {
          setWeatherData(data);
          setError(null);
        }
      })
  }

    const handleSearch = (e) => {
    if (e.target.value !== "") {
    setUserInput(e.target.value)
    }
    }
  
  return (
    <div>
      <Icon />
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
        {weatherData && <Weather weatherData={weatherData}/>}
      </div>
  </div>
  );
}

export default App;
