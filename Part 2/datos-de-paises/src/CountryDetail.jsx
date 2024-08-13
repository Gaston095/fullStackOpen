import axios from "axios";
import { useEffect, useState } from "react";

export default function CountryDetail({ country }) {
  const [weather, setWeather] = useState([]);
  const languagesArray = Object.values(country.languages);
  const lat = country.latlng[0];
  const lon = country.latlng[1];
  const API_KEY = import.meta.env.VITE_SOME_KEY
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  return (
    <>
      <h1>{country.name.common}</h1>
      <br />
      <div>{`capital ${country.capital}`}</div>
      <div>{`area ${country.area}`}</div>
      <br />
      <div>
        <strong>languages:</strong>
      </div>
      <ul>
        {languagesArray.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <br />
      <picture>
        <img height={"150px"} src={country.flags.png} alt={country.flags.alt} />
      </picture>
      {weather.length === 0 ? (
        <h2>Cargando datos del tiempo...</h2>
      ) : (
        <div>
          <h2>{`Weather in ${country.name.common}`}</h2>
          <div>{`temperature ${weather.main.temp} celsius`}</div>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
          <div>{`wind ${weather.wind.speed} m/s`}</div>
        </div>
      )}
    </>
  );
}
