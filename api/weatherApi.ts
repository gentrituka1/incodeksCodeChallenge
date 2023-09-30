const API_KEY = "bed7990bf1580ed98e7c9e7320b89527";

export const getWeather = async (city: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=bed7990bf1580ed98e7c9e7320b89527`
  );
  return response.json();
};

export const getUserWeather = async (lat: number, lon: number) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=bed7990bf1580ed98e7c9e7320b89527`
  );
  return response.json();
};
