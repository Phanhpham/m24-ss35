import React,{useState}from 'react'

export default function B3() {
    const [changeColor,setChangeColor] =useState<boolean> (false);
    const [color, setColor] = useState('black');
    const handleButtonClick = () => {
        setColor('red');
    };
  return (
    <div>B3
        <p style={{ color }}>tiêu đè van ban :{color} </p>
        <button onClick={handleButtonClick}>Change Color</button>
    </div>
  );
}
