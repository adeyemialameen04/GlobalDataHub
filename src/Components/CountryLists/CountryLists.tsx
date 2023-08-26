import CountryItem from "../CountryItem/CountryItem";
import "./countryLists.css";

const CountryLists = () => {
  return (
    <section className="countrylist--section">
      <div className="container countrylist__container">
        <CountryItem />
        <CountryItem />
        <CountryItem />
        <CountryItem />
        <CountryItem />
        <CountryItem />
        <CountryItem />
      </div>
    </section>
  );
};

export default CountryLists;
