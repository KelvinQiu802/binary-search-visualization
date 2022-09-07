import './App.css';
import React from 'react';
import Welcome from './components/Welcome';

function App() {
  const [formData, setFormData] = React.useState({
    arrStr: '1,2,3,4,5,6,7,8,9',
    target: '2',
  });
  const [start, setStart] = React.useState(false);

  return (
    <div className='App'>
      {start ? (
        <h1>Go</h1>
      ) : (
        <Welcome
          formData={formData}
          setFormData={setFormData}
          setStart={setStart}
        />
      )}
    </div>
  );
}

export default App;
