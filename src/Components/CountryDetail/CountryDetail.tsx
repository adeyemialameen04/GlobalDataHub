import { useEffect } from "react";
import "./countryDetail.css";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import { Flag, LanguageNames } from "../../utils/Country.types";
import LazyImage from "../LazyImage";

const CountryDetail = () => {
  const { name } = useParams();

  const replaceHyphenWithSpace = (inputString: string) => {
    return inputString.replace(/-/g, " ");
  };

  type CountryDetail = {
    name: {
      official: string;
      nativename?: LanguageNames;
    };
    flags: Flag;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    tld: string[];
    currencies: object;
    languages: object;
    borders: string[];
  };

  const getCountry = async () => {
    try {
      if (!name) {
        throw new Error("Country name not provided.");
      }

      const url: string = `${BASE_URL}name/${replaceHyphenWithSpace(name)}`;
      const response = await axios.get(url);
      const data: CountryDetail = await response.data[0];
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data: countryDetails, isLoading } = useQuery(
    ["countryDetails", name],
    getCountry,
    {
      enabled: !!name,
      staleTime: 60000,
      refetchInterval: 60000,
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="country-detail--section">
      <div className="container country-detail__container">
        <div className="detail-fag-container">
          <LazyImage
            imgSrc={
              countryDetails?.flags?.svg ?? countryDetails?.flags?.png ?? ""
            }
          />
        </div>
        <div className="country-details">
          <h1>{countryDetails?.name.official}</h1>
          <div className="test">
            <div>
              <h3>Native Names:</h3>
              <h3>
                Population:{" "}
                <span>{countryDetails?.population.toLocaleString()}</span>
              </h3>
              <h3>
                Region: <span>Europe</span>
              </h3>
              <h3>
                Sub Region: <span>Western Europe</span>
              </h3>
              <h3>Capital: {countryDetails?.capital[0]}</h3>
            </div>
            <div>
              <h3>
                Top Level Domain: <span>.be</span>
              </h3>
              <h3>
                Currencies:{" "}
                <span>
                  {Object.entries(countryDetails?.currencies ?? {}).map(
                    ([code, currency]) => (
                      <span key={code}>
                        {currency.name} ({code})
                      </span>
                    )
                  )}
                </span>
              </h3>
              <h3>
                Languages:{" "}
                <span>
                  {" "}
                  {Object.entries(countryDetails?.languages ?? {}).map(
                    ([langCode, langName]) => (
                      <span key={langCode}>
                        {langName} {", "}
                      </span>
                    )
                  )}
                </span>
              </h3>
            </div>
          </div>
          <div>
            <h3>
              Border Countries:{" "}
              <span>
                {countryDetails?.borders &&
                  countryDetails?.borders.map((border, index) => (
                    <small key={index}>
                      {border}
                      {", "}
                    </small>
                  ))}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetail;
// import { useEffect } from "react";
// import "./countryDetail.css";
// import { useParams } from "react-router-dom";
// import { BASE_URL } from "../../utils/constants";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
// import Loader from "../Loader/Loader";
// import { Flag, LanguageNames } from "../../utils/Country.types";

// const CountryDetail = () => {
//   const { name } = useParams();

//   const replaceHyphenWithSpace = (inputString: string) => {
//     return inputString.replace(/-/g, " ");
//   };

//   type CountryDetail = {
//     name: {
//       official: string;
//       nativeName?: LanguageNames;
//     };
//     flag: Flag;
//     population: number;
//     region: string;
//     subregion: string;
//     capital: string;
//     tld: string[];
//     currencies: {
//       [code: string]: {
//         name: string;
//       };
//     };
//     languages: {
//       name: LanguageNames;
//     };
//   };

//   const getCountry = async () => {
//     try {
//       if (!name) {
//         throw new Error("Country name not provided.");
//       }

//       const url: string = `${BASE_URL}name/${replaceHyphenWithSpace(name)}`;
//       const response = await axios.get(url);
//       const data: CountryDetail = await response.data[0];
//       return data;
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const { data: countryDetails, isLoading } = useQuery(
//     ["countryDetails", name],
//     getCountry,
//     {
//       enabled: !!name,
//       staleTime: 60000,
//       refetchInterval: 60000,
//     }
//   );

//   useEffect(() => {
//     console.log(countryDetails);
//   }, [countryDetails]);

//   if (isLoading) {
//     return <Loader />;
//   }

//   const nativeNames = countryDetails?.name.nativeName;

//   return (
//     <section>
//       <div className="container country-detail__container">
//         <div className="detail-fag-container">
//           <img src={countryDetails?.flag.svg} alt="Country flag" />
//         </div>
//         <div className="country-details">
//           <h1>{countryDetails?.name.official}</h1>
//           <div>
//             <div>
//               <h3>
//                 Native Name:{" "}
//                 <span>{nativeNames?.deu?.common}</span>
//               </h3>
//               <h3>
//                 Population:{" "}
//                 <span>{countryDetails?.population.toLocaleString()}</span>
//               </h3>
//               <h3>
//                 Region: <span>{countryDetails?.region}</span>
//               </h3>
//               <h3>
//                 Sub Region: <span>{countryDetails?.subregion}</span>
//               </h3>
//               <h3>Capital: {countryDetails?.capital}</h3>
//             </div>
//             <div>
//               <h3>
//                 Top Level Domain:{" "}
//                 <span>{countryDetails?.tld.join(", ")}</span>
//               </h3>
//               <h3>
//                 Currencies:
//                 {Object.entries(countryDetails?.currencies || {}).map(
//                   ([code, currency]) => (
//                     <span key={code}>
//                       {currency.name} ({code})
//                     </span>
//                   )
//                 )}
//               </h3>
//             </div>
//           </div>
//           <div>
//             <h3>Border Countries:</h3>
//             {/* Render border countries here */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CountryDetail;
