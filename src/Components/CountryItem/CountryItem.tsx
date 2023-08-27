import LazyImage from "../LazyImage";
import { Link } from "react-router-dom";
import "./countryItem.css";
import { Flag } from "../../utils/Country.types";

type Country = {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
  flags: Flag;
};

type CountryProps = {
  country: Country;
};

const CountryItem = ({ country }: CountryProps) => {
  const formatRouteName = (name: string) => {
    const formattedName = name.replace(/\s+/g, "-");
    return formattedName;
  };

  return (
    <Link
      to={`country/${formatRouteName(country?.name.common)}`}
      className="country-item"
    >
      <div className="flag-container">
        <LazyImage
          imgSrc={country?.flags?.svg ?? country?.flags?.png ?? ""}
          imgAlt={`${country?.name?.common} flag`}
        />
      </div>
      <div className="country-info">
        <h1>{country?.name.common}</h1>
        <div>
          <h3>
            Population: <span>{country.population.toLocaleString()}</span>
          </h3>
          <h3>
            Region: <span>{country.region}</span>
          </h3>
          <h3>
            Capital: <span>{country.capital}</span>
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CountryItem;
