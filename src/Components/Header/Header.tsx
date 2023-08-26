import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <input type="text" />
        <select name="region" id="region">
          <option value="americas">America</option>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
