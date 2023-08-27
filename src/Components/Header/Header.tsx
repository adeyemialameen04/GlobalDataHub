import { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./header.css";

type HeaderProps = {
  region: string;
  setRegion: (region: string) => void;
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
};

const Header = ({
  setRegion,
  region,
  setSearchQuery,
  searchQuery,
}: HeaderProps) => {
  useEffect(() => {
    console.log(region);
  }, [region]);

  const handleChangeRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setRegion(e.target.value);
  };

  const handleSearchCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <div className="input-container">
          <AiOutlineSearch className="search-icon" />
          <input
            className="search-input"
            value={searchQuery}
            onChange={handleSearchCountry}
            type="text"
          />
        </div>
        <select
          onChange={handleChangeRegion}
          value={region}
          name="region"
          id="region"
        >
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
