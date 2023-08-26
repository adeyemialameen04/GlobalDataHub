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

  const getAllCountries = async (selectedRegion: string) => {
    try {
      if (selectedRegion !== "") {
        const url = `${BASE_URL}region/${selectedRegion}`;
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
    isStale,
    isLoading,
  } = useQuery(["countries", region], () => getAllCountries(region), {
    refetchInterval: 60000,
    staleTime: 60000,
  });

  useEffect(() => {
    if (countries) {
      console.log(countries);
    }
  }, [countries]);

  const handleRegionChange = (selectedRegion: string) => {
    setRegion(selectedRegion);
  };

  useEffect(() => {
    console.log(region);
    refetch();
  }, [region]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="countrylist--section">
      <Header onRegionChange={handleRegionChange} />
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
