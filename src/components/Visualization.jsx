import { strToArr } from '../utils/tools';
import Hi from './Hi';
import Mid from './Mid';
import Lo from './Lo';
import React from 'react';

const Visualization = ({ formData, searchResult }) => {
  const arr = strToArr(formData.arrStr);

  const [index, setIndex] = React.useState(0);

  const numberOfStep = searchResult.current.hiArr.length;

  const handlePrev = () => {
    setIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIndex((prev) => prev + 1);
  };

  console.log(searchResult.current);

  return (
    <div>
      <Hi index={searchResult.current.hiArr[index]} />
      <Lo index={searchResult.current.loArr[index]} />
      <div className='array'>
        {arr.map((item, index) => (
          <div key={index} className='num' id={index}>
            {item}
          </div>
        ))}
      </div>
      <Mid index={searchResult.current.midArr[index]} />
      <div className='btn-group'>
        <button onClick={handlePrev} disabled={index === 0}>
          prev
        </button>
        <button onClick={handleNext} disabled={index === numberOfStep - 1}>
          next
        </button>
      </div>
    </div>
  );
};

export default Visualization;
