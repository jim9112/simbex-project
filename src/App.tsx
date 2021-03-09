import React from 'react';
import Clinicians from './components/Clinicians';
import Header from './components/Header';
import useFetch from './utilities/useFetch';

function App() {
  // use custom fetch hook to fetch data from local JSON file
  const { loading, userData, setUserData } = useFetch('Clinicians.json');
  return (
    <div className="App">
      <Header />
      {!loading && <Clinicians data={userData?.data.result} />}
    </div>
  );
}

export default App;
