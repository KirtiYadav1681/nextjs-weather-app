const apiKey = process.env.NEXT_PUBLIC_API_KEY;
export const fetchCoordinates = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch coordinates');
    }
  
    const data = await response.json();
    const { lat, lon } = data.coord;
    return { lat, lon };
  };
  