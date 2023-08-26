import CountryItem from "../CountryItem/CountryItem";
import "./countryLists.css";
import { BASE_URL, API_KEY } from "../../utils/constants";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const CountryLists = () => {
  const getAllCountries = async () => {
    try {
      const url = `${BASE_URL}all`;
      const response = await axios.get(url);
      const data: [] = await response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data: countries } = useQuery(["countries"], getAllCountries);

  useEffect(() => {
    if (countries) {
      console.log(countries);
    }
  }, [countries]);

  return (
    <section className="countrylist--section">
      <div className="container countrylist__container">
        {countries &&
          countries.map((country, index) => (
            <CountryItem country={country} key={index} />
          ))}
      </div>
    </section>
  );
};

export default CountryLists;
