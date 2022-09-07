import binarySearch from '../utils/binarySearch.js';
import { strToArr } from '../utils/tools';
const Welcome = ({ formData, setFormData, setStart, searchResult }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const arr = strToArr(formData.arrStr);
    const data = {
      arr,
      target: parseInt(formData.target),
      lo: 0,
      hi: arr.length - 1,
      mid: null,
      loArr: [],
      hiArr: [],
      midArr: [],
      result: null,
    };

    searchResult.current = binarySearch(data);
    setStart(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='welcome'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='arrStr'>Array: </label>
        <input
          type='text'
          name='arrStr'
          id='arrStr'
          value={formData.arrStr}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor='target'>Target: </label>
        <input
          type='text'
          name='target'
          id='target'
          value={formData.target}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <button type='submit'>Start</button>
      </form>
    </div>
  );
};

export default Welcome;
