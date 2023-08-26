import { useEffect } from "react";
import "./header.css";

interface HeaderProps {
  setRegion: (region: string) => void;
  region: string;
}

const Header: React.FC<HeaderProps> = ({ setRegion, region }) => {
  useEffect(() => {
    console.log(region);
  }, [region]);

  const handleChangeRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setRegion(e.target.value);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <input type="text" />
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
