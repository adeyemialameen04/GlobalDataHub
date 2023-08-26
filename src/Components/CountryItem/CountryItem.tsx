import "./countryItem.css";

const CountryItem = () => {
  return (
    <article className="country-item">
      <div className="flag-container">
        <img src="https://flagcdn.com/ca.svg" alt="" />
      </div>
      <div className="country-details">
        <h1>Germany</h1>
        <div>
          <h3>
            Population: <span>80000</span>
          </h3>
          <h3>
            Region: <span>Europe</span>
          </h3>
          <h3>
            Capital: <span>Berlin</span>
          </h3>
        </div>
      </div>
    </article>
  );
};

export default CountryItem;
