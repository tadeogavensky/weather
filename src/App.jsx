import { useContext, useState, useEffect } from "react";
import { WeatherContext } from "./components/Context";
import axios from "axios"
import { Dashboard } from "./components/Dashboard";

function App() {
  const { state, setTheme } = useContext(WeatherContext);

  const [location, setLocation] = useState("");

  const [weatherData, setWeatherData] = useState({});

  const API_KEY = "b8b260efd72f49e155793afe8d850c9f";

  const setWeather = async (location) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
    );

    setWeatherData(res.data)

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWeather(location);
  };

  return (
    <div className="m-4 sm:m-12">
      <Dashboard weather={weatherData}/>
    </div>
  );
}

export default App;
