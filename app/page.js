"use client";

import { useState, useEffect, useCallback } from "react";
import weatherBackgrounds from "./lib/constants/bg";
import debounce from "lodash/debounce";
import { FaLocationDot } from "react-icons/fa6";
import { getCurrentTime, getCurrentDate } from "./lib/utils/getDateAndTime";
import { fetchCurrentWeatherData, fetchHourlyWeatherData, } from "./lib/utils/fetchData";
import { fetchCoordinates } from "./lib/utils/fetchCoordinates";
import HourlyWeatherDataCard from "./lib/components/HourlyWeatherDataCard";
import DailyWeatherDataCard from "./lib/components/DailyWeatherDataCard";

const initialBg =
  "https://nema.kn/wp-content/uploads/2019/01/hd-nature-wallpaper-background-images-love-nice-weather-sadness-romance-high-resolution-widescreen-1366x768.jpg";
const initialCity = "Indore";

export default function Home() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [unit, setUnit] = useState("metric");
  const [city, setCity] = useState(initialCity);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastWeatherData, setForecastWeatherData] = useState(null);
  const [backgroundImg, setBackgroundImg] = useState(initialBg);
  const [error, setError] = useState(null);
  const [isDaily, setIsDaily] = useState(false);

  // useeffect to get current, hourly and daily weather data
  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await fetchCurrentWeatherData(city, unit);
        let iconId = data.weather?.[0].icon;
        setWeatherData(data);
        setBackgroundImg(weatherBackgrounds[iconId]);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    const getHourlyData = async () => {
      try {
        const { lat, lon } = await fetchCoordinates(city);
        const data = await fetchHourlyWeatherData(lat, lon, unit);
        setForecastWeatherData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    getHourlyData();
    getWeatherData();
  }, [city, unit]);

  // useeffect to get current date and time
  useEffect(() => {
    setTime(getCurrentTime());
    setDate(getCurrentDate());

    // Update time every minute
    const timer = setInterval(() => {
      setTime(getCurrentTime());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // setting city uisng debouncing
  const debouncedSetCity = useCallback(
    debounce((value) => {
      setCity(value);
      setError(null);
    }, 500),
    []
  );

  // setting city value
  const handleCityInput = (e) =>
    debouncedSetCity(e.target.value ? e.target.value : initialCity);

  return (
    <main className="relative h-screen w-screen bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>

      <div className="relative z-10">
        <div className="flex flex-grow align-top justify-between">
          {/* left top div */}
          <div
            className="mx-10 mt-5 p-5"
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          >
            {weatherData && !error ? (
              <>
                <div className="flex flex-row items-top">
                  <h1 className="text-white text-6xl">
                    {weatherData?.main?.temp}°
                  </h1>
                  <div className="text-white flex flex-col ml-2">
                    <button
                      className={`text-xl ${
                        unit == "metric" ? "opacity-65" : "opacity-30"
                      }`}
                      onClick={() => setUnit("metric")}
                    >
                      C
                    </button>
                    <button
                      className={`text-xl ${
                        unit == "imperial" ? "opacity-65" : "opacity-30"
                      } mt-2`}
                      onClick={() => setUnit("imperial")}
                    >
                      F
                    </button>
                  </div>
                  <div className="ml-8">
                    <img
                      src={`https://openweathermap.org/img/wn/${weatherData?.weather?.[0].icon}@2x.png`}
                      alt="weather-icon"
                      className="h-[80px] w-[80px] mt-[-20px]"
                    />
                    <p className="text-white opacity-40 text-center mt-[-15px]">
                      {weatherData?.weather?.[0].main}
                    </p>
                  </div>
                </div>
                <h1 className="text-4xl text-white opacity-75 ">
                  {city.charAt(0).toUpperCase() + city.slice(1)}
                </h1>
              </>
            ) : (
              <>
                <h2 className="text-red-600 text-base">
                  City Not Found, please enetr a valid city
                </h2>
              </>
            )}

            <div
              className="flex flex-row items-center mt-10 rounded-lg pl-2"
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <span>
                <FaLocationDot color="white" />
              </span>
              <input
                type="text"
                placeholder="Change Location"
                onChange={(e) => handleCityInput(e)}
                className="bg-transparent p-2 text-sm rounded-xl outline-none border-none text-white"
              />
            </div>
          </div>

          {/* right top div */}
          <div
            className="mx-10 mt-5 p-8 text-white text-right h-[113px]"
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          >
            <h2 className="opacity-75">{time}</h2>
            <p className="opacity-35">{date}</p>
          </div>
        </div>

        {/* LOWER CONTENT */}
        <div className="fixed bottom-0 left-0 w-full">
          <div className="text-white flex flex-row items-center ml-10">
            <p
              onClick={() => setIsDaily(false)}
              className={`text-lg cursor-pointer ml-2 ${
                isDaily ? "opacity-30" : "opacity-65 border-b-2 border-white"
              }`}
            >
              Hourly
            </p>
            <p
              className={`text-lg cursor-pointer ml-6 ${
                isDaily ? "opacity-65 border-b-2 border-white" : "opacity-30"
              }`}
              onClick={() => setIsDaily(true)}
            >
              Daily
            </p>
          </div>
          <div
            className="flex flex-row justify-between p-10"
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          >
            {isDaily 
              ? forecastWeatherData?.daily
                  ?.slice(1)
                  ?.map((data, index) => (
                    <DailyWeatherDataCard data={data} key={index} error={error} />
                  ))
              : forecastWeatherData?.hourly
                  ?.slice(0, 7)
                  ?.map((data, index) => (
                    <HourlyWeatherDataCard data={data} key={index} error={error} />
                  ))}
            {error && (
              <h2 className="text-red-600 text-base">
                City Not Found, please enter a valid city.
              </h2>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
