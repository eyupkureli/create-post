import React from 'react';
import './App.css';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          CONTACTS
        </p>
      </header>
      <section className="App-body">
          <Contacts />
      </section>
    </div>
  );
}

export default App;
