import React, { createContext, useEffect, useReducer } from "react";
import axios from "axios";

export const initialState = {
  theme: JSON.parse(localStorage.getItem("theme")) || "",
  weather: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WEATHER":
      return { ...state, weather: action.payload };

    case "SET_THEME":
      localStorage.setItem("theme", JSON.stringify(action.payload));
      return { ...state, theme: action.payload };

    default:
      return state;
  }
};

export default reducer;

export const WeatherContext = createContext({
  theme: "light",
  weather: [],
});

export const WeatherContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const API_KEY = "b8b260efd72f49e155793afe8d850c9f";

  const setWeather = async (location) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
    );

    dispatch({ type: "SET_WEATHER", payload: res.data });
  };

  const setTheme = (theme) => {
    dispatch({ type: "SET_THEME", payload: theme });
  };

  const contextValue = {
    setTheme,
    setWeather,
    state,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
