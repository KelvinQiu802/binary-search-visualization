import { strToArr } from '../utils/tools';

const Visualization = ({ formData }) => {
  const arr = strToArr(formData.arrStr);

  return (
    <div>
      <div className='array'>
        {arr.map((item, index) => (
          <div key={index} className='num'>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Visualization;
