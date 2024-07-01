import React from "react";

const DailyWeatherDataCard = ({ data, error }) => {
  return (
    <div
      className={`text-white opacity-80 p-3 w-[12%] h-[185px] rounded-lg ${error && "hidden"}`}
      style={{ backgroundColor: "rgba(225,225,225,0.2)" }}
    >
      <p>
        {new Date(data.dt * 1000).toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <img
        src={`https://openweathermap.org/img/wn/${data?.weather?.[0].icon}@2x.png`}
        alt="weather-icon"
        className="h-[80px] w-[80px]"
      />
      <span className="text-2xl">{data?.feels_like?.day}° </span>
      <span className="opacity-60 ml-1">{data?.feels_like?.night}°</span>
      <p className="text-sm mt-2 opacity-75">
        {(data?.weather?.[0].description).charAt(0).toUpperCase() +
          (data?.weather?.[0].description).slice(1)}
      </p>
    </div>
  );
};

export default DailyWeatherDataCard;
