import { getOffsetByIndex } from '../utils/tools';
import React from 'react';

const Hi = ({ index }) => {
  React.useEffect(() => {
    const offset = getOffsetByIndex(index);
    const elem = document.querySelector('.hi');
    elem.style.left = offset + 'px';
  }, [index]);

  return (
    <div className='hi'>
      <i>Hi</i>
      <div></div>
    </div>
  );
};

export default Hi;
