import CountryItem from "../CountryItem/CountryItem";
import "./countryLists.css";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const CountryLists = () => {
  const [region, setRegion] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [countryNotFound, setCountryNotFound] = useState<boolean>(false);

  const getAllCountries = async () => {
    try {
      let url = `${BASE_URL}all`;
      if (region.trim() !== "") {
        url = `${BASE_URL}region/${region}`;
      } else if (searchQuery.trim() !== "") {
        url = `${BASE_URL}name/${searchQuery}`;
      }
      const response = await axios.get(url);
      const data: [] = await response.data;
      return data;
    } catch (error) {
      if (error.response.data.message === "Not Found") {
        setCountryNotFound(true);
      }
      const data: [] = [];
      return data;
    }
  };

  const {
    data: countries,
    isLoading,
    isError,
    error,
  } = useQuery(["countries", region], getAllCountries, {
    refetchInterval: 60000,
    staleTime: 60000,
  });
  const { data: resultCountries } = useQuery(
    ["countries", searchQuery],
    getAllCountries,
    {
      refetchInterval: 60000,
      staleTime: 60000,
      enabled: !!searchQuery,
    }
  );

  useEffect(() => {
    if (countries) {
      console.log(countries);
    }
  }, [countries]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    console.log(error);
  }

  return (
    <section className="countrylist--section">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setRegion={setRegion}
        region={region}
      />
      <div className="container countrylist__container">
        <>
          {searchQuery === ""
            ? countries?.length !== 0 &&
              countries?.map((country, index) => (
                <CountryItem country={country} key={index} />
              ))
            : resultCountries?.length !== 0 &&
              resultCountries?.map((country, index) => (
                <CountryItem country={country} key={index} />
              ))}
        </>
      </div>
      <h1 className="container">
        {countryNotFound
          ? "Sorry this country is not found pls check the search box and try again"
          : ""}
      </h1>
    </section>
  );
};

export default CountryLists;
