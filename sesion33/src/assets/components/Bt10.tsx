import React, { useState } from 'react';

export default function Bt10() {
  const [input, setInput] = useState<string[]>([]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      setInput([...input, value]);
    } else {
      setInput(input.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <h4>Bai 10</h4>
      <p>{input.join(', ')}</p>
      <form>
        <p>
          <input
            type="checkbox"
            value="Di choi"
            onChange={handleCheckboxChange}
          />
          Di choi
        </p>
        <p>
          <input
            type="checkbox"
            value="Code"
            onChange={handleCheckboxChange}
          />
          Code
        </p>
        <p>
          <input
            type="checkbox"
            value="Boi loi"
            onChange={handleCheckboxChange}
          />
          Boi loi
        </p>
        <p>
          <input
            type="checkbox"
            value="Nhay day"
            onChange={handleCheckboxChange}
          />
          Nhay day
        </p>
      </form>
    </div>
  );
}
