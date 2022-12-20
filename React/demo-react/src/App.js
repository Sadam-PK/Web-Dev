import './App.css';
import './components/functionalComponents'
import FunctionalComponent from './components/functionalComponents';
import React, { useState } from 'react';
import { UserInfo } from './AppContext';


function App() {
  let [userName, setUsername] = useState('To Al-Nafi')
  return (
    <div className="App">
      <h1>Main App File</h1>
      <UserInfo.Provider value={[userName, setUsername]}>
        <header className="App-header">
          <FunctionalComponent />
        </header>
      </UserInfo.Provider>
    </div>
  );
}

export default App;
