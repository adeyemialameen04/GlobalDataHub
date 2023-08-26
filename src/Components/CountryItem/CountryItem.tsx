import LazyImage from "../LazyImage";
import "./countryItem.css";
import { useEffect } from "react";

type Country = {
  name: {
    official: string;
  };
  population: number;
  region: string;
  capital: string;
  flags: {
    svg: string;
    png: string;
  };
};

type CountryProps = {
  country: Country;
};

const CountryItem = ({ country }: CountryProps) => {
  return (
    <article className="country-item">
      <div className="flag-container">
        {/* <img
          src={country?.flags?.svg ? country?.flags?.svg : country?.flags?.png}
          alt=""
        /> */}
        <LazyImage
          imgSrc={
            country?.flags?.svg ? country?.flags?.svg : country?.flags?.png
          }
        />
      </div>
      <div className="country-details">
        <h1>{country?.name.official}</h1>
        <div>
          <h3>
            Population: <span>{country.population}</span>
          </h3>
          <h3>
            Region: <span>{country.region}</span>
          </h3>
          <h3>
            Capital: <span>{country.capital}</span>
          </h3>
        </div>
      </div>
    </article>
  );
};

export default CountryItem;
