import { useState } from "react";
import "./header.css";

interface HeaderProps {
  onRegionChange: (selectedRegion: string) => void;
}

const Header = ({ onRegionChange }: HeaderProps) => {
  const [region, setRegion] = useState<string>("");

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const selectedRegion = e.target.value;
    setRegion(selectedRegion);
    onRegionChange(selectedRegion);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <input type="text" />
        <select
          onChange={handleRegionChange}
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
