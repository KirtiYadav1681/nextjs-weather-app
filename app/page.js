"use client";

import { useState, useEffect, useCallback } from "react";
import weatherBackgrounds from "./lib/constants/bg";
import debounce from "lodash/debounce";

const initialBg =
  "https://nema.kn/wp-content/uploads/2019/01/hd-nature-wallpaper-background-images-love-nice-weather-sadness-romance-high-resolution-widescreen-1366x768.jpg";
const initialCity = "Indore";

export default function Home() {
  const [backgroundImg, setBackgroundImg] = useState(initialBg);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(initialCity);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=00f28817bfc8fabc5b0bd05ca8e00d53`;
  useEffect(() => {
    const getWeather = async () => {
      const response = await fetch(url);
      const result = await response?.json();
      let iconId = result.weather?.[0].icon;
      if (result.cod == "404") {
        return setWeatherData(null);
      }
      setWeatherData(result);
      setBackgroundImg(weatherBackgrounds[iconId]);
    };
    getWeather();
  }, [city]);

  const debouncedSetCity = useCallback(
    debounce((value) => setCity(value), 500),
    []
  );
  const handleCityInput = (e) =>
    debouncedSetCity(e.target.value ? e.target.value : initialCity);

  return (
    <main className="relative h-screen w-screen bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div>
          <h1 className="text-white text-4xl">Your Weather App</h1>
          <input
            type="text"
            placeholder="Enter city here..."
            onChange={(e) => handleCityInput(e)}
          />
          <h4 className="text-white text-2xl">{city}</h4>
          {weatherData ? (
            <h2 className="text-white text-3xl">
              {weatherData?.weather[0].description}
            </h2>
          ) : (
            <h2 className="text-red-600 text-3xl">City Not Found</h2>
          )}
        </div>
      </div>
    </main>
  );
}
