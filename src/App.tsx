import React from 'react';
import Header from './components/Header';
import useFetch from './utilities/useFetch';

function App() {
  const { loading, userData, setUserData } = useFetch('Clinicians.json');
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
