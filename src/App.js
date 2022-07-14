import React, { useState } from 'react';
import Header from './components/Header';


function App() {
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }
  return (
    <>
      <Header
        handleSearch={handleSearch}
      />

    </>
  );
}

export default App;
