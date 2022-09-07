import './App.css';
import React from 'react';
import Welcome from './components/Welcome';
import Visualization from './components/Visualization';

function App() {
  const [formData, setFormData] = React.useState({
    arrStr: '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20',
    target: '2',
  });
  const [start, setStart] = React.useState(false);

  return (
    <div className='App'>
      {start ? (
        <Visualization formData={formData} />
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
