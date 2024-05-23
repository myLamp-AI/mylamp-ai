"use client"
import { useState } from 'react';
interface CircleProgressProps {
    percentage: number;
  }

const FillingDiv: React.FC = () => {
  const [fillWidth, setFillWidth] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('0');
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d{0,3}$/.test(value)) {  // Allow only numbers up to three digits
      setInputValue(value);

      const numberValue = Number(value);
      if (numberValue >= 0 && numberValue <= 100) {
        setFillWidth(numberValue);
      }
    }
  };

  return (
    <>
      <div className="w-80 h-4 border-2 border-black mb-5 relative">
        <div 
          className="h-full bg-blue-500" 
          style={{ width: `${fillWidth}%` }}>
        </div>
      </div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        className="w-80 p-2 border-2 border-gray-300"
        placeholder="Enter a number (0-100)"
      />
    </>
  );
};

export default FillingDiv;

