import React, { useState } from 'react';
import Clinicians from './components/Clinicians';
import Header from './components/Header';
import useFetch from './utilities/useFetch';

function App() {
  // use custom fetch hook to fetch data from local JSON file
  const { loading, userData, setUserData } = useFetch('Clinicians.json');
  const [userSearch, setUserSearch] = useState<string>('');
  return (
    <div className="App">
      <Header userSearch={userSearch} setUserSearch={setUserSearch} />
      {!loading && (
        <Clinicians data={userData?.data.result} userSearch={userSearch} />
      )}
    </div>
  );
}

export default App;
