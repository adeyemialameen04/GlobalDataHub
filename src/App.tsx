import { useEffect } from "react";
import { API_KEY, BASE_URL } from "./utils/constants";
import axios from "axios";
import CountryItem from "./Components/CountryItem/CountryItem.tsx";
import Navbar from "./Components/Navbar/Navbar";
import CountryLists from "./Components/CountryLists/CountryLists.tsx";

function App() {
  // useEffect(()=>{
  //   const getCountriesData =async()=>{
  //     try {
  //       const url = `${BASE_URL}all?access_key=${API_KEY}`
  //       const response  = await axios.get(url)
  //       const data:[] = await response.data
  //       console.log(data)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }

  //   getCountriesData()
  // },[])

  return (
    <>
      <Navbar />
      <CountryLists />
    </>
  );
}

export default App;
