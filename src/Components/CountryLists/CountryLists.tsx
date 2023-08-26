import CountryItem from "../CountryItem/CountryItem";
import "./countryLists.css";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const CountryLists = () => {
  const [region, setRegion] = useState("");

  const getAllCountries = async () => {
    try {
      if (region !== "") {
        const url = `${BASE_URL}region/${region}`;
        const response = await axios.get(url);
        const data: [] = await response.data;
        return data;
      } else {
        const url = `${BASE_URL}all`;
        const response = await axios.get(url);
        const data: [] = await response.data;
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const {
    data: countries,
    refetch,
    isLoading,
  } = useQuery(["countries", region], getAllCountries, {
    refetchInterval: 60000,
    staleTime: 60000,
  });

  useEffect(() => {
    if (countries) {
      console.log(countries);
    }
  }, [countries]);

  useEffect(() => {
    refetch();
  }, [region]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="countrylist--section">
      <Header setRegion={setRegion} region={region} />
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
