import { getOffsetByIndex } from '../utils/tools';
import React from 'react';

const Lo = ({ index }) => {
  React.useEffect(() => {
    const offset = getOffsetByIndex(index);
    const elem = document.querySelector('.lo');
    elem.style.left = offset + 'px';
  }, [index]);

  return (
    <div className='lo'>
      <i>Lo</i>
      <div></div>
    </div>
  );
};

export default Lo;
