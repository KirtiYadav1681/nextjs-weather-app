import React from "react";

const HourlyWeatherDataCard = ({data, error}) => {
  return (
    <div
    className={`text-white opacity-80 p-3 lg:w-[12%] md:w-[25%] sm:w-[100%] min-h-[190px] max-sm:w-[100%] rounded-lg ${error && "hidden"} flex flex-col max-md:items-center max-md:justify-center`}
    style={{ backgroundColor: "rgba(225,225,225,0.2)" }}
  > 
      <p>
        {new Date(data.dt * 1000).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </p>
      <img
        src={`https://openweathermap.org/img/wn/${data?.weather?.[0].icon}@2x.png`}
        alt="weather-icon"
        className="h-[80px] w-[80px]"
      />
      <span className="text-xl">{data?.temp}° </span>
      <p className="text-sm mt-2 opacity-75">
        {(data?.weather?.[0].description).charAt(0).toUpperCase() +
          (data?.weather?.[0].description).slice(1)}
      </p>
    </div>
  );
};

export default HourlyWeatherDataCard;
