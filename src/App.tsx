import React, { useState } from 'react';
import Clinicians from './components/Clinicians';
import FormModal from './components/FormModal';
import Header from './components/Header';
import useFetch from './utilities/useFetch';

function App() {
  // use custom fetch hook to fetch data from local JSON file
  const { loading, userData, setUserData } = useFetch('Clinicians.json');
  const [userSearch, setUserSearch] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <div className="App font-sans relative">
      {modalOpen && <FormModal setModalOpen={setModalOpen} />}
      <Header
        userSearch={userSearch}
        setUserSearch={setUserSearch}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <Clinicians
        data={userData?.data.result}
        userSearch={userSearch}
        loading={loading}
      />
    </div>
  );
}

export default App;
