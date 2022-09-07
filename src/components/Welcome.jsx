const Welcome = ({ formData, setFormData, setStart }) => {
  const handleSubmit = () => {
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
      <form onSubmit={handleSubmit}>
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
