import { useEffect, useState } from "react";
import axios, { all } from "axios";
import CountryDetail from "./CountryDetail";

function App() {
  const [countries, setCountries] = useState([]);
  const [findCountry, setFindCountry] = useState("");
  const [viewDetailCountry, setViewDetailCountry] = useState(false);
  const [countryClicked, setCountryClicked] = useState([]);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const handleChange = (event) => {
    setFindCountry(event.target.value);
  };

  const allCountries =
    findCountry === ""
      ? countries
      : countries.filter((country) =>
          country.name.common.toLowerCase().includes(findCountry.toLowerCase())
        );

  const lengthCountries = allCountries.length;

  return (
    <>
      <form>
        find countries{" "}
        <input type="text" value={findCountry} onChange={handleChange} />
      </form>
      <ul>
        {lengthCountries === 0 ? (
          <h2>Cargando paises...</h2>
        ) : lengthCountries === 1 ? (
          <CountryDetail country={allCountries[0]} />
        ) : lengthCountries > 1 && lengthCountries < 10 ? (
          allCountries.map((country) => (
            <li key={country.name.common}>
              {country.name.common}
              <button
                onClick={() => {
                  setCountryClicked(country);
                  setViewDetailCountry(true);
                }}
              >
                show
              </button>
            </li>
          ))
        ) : (
          <span>Too many matches, specify another filter</span>
        )}
      </ul>
      {
        viewDetailCountry && 
        <div>
          <CountryDetail country={countryClicked}/>
          {lengthCountries === 1 && setViewDetailCountry(false)}
        </div>
      }
    </>
  );
}

export default App;
