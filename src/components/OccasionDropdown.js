import { useState } from "react";
import "../styles/occasiondropdown.css"

function OccasionDropdown() {
  const [selectedValue, setSelectedValue] = useState('');
  const options = [
    { value: 'Occasion', label: 'Occasion' },
    { value: 'Birthday', label: 'Birthday' },
    { value: 'Anniversary', label: 'Anniversary' },
  ];
  return (
    <select className="occasion-dropdown"
      value={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
    >
      {options.map((option) => (
        <option className="occasion-dropdown" key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default OccasionDropdown;