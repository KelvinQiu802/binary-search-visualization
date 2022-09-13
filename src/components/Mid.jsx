import { getOffsetByIndex } from '../utils/tools';
import React from 'react';

const Mid = ({ index }) => {
  React.useEffect(() => {
    const offset = getOffsetByIndex(index);
    const elem = document.querySelector('.mid');
    elem.style.left = offset + 'px';
  }, [index]);

  return (
    <div className='mid'>
      <div></div>
      <i>Mid</i>
    </div>
  );
};

export default Mid;
