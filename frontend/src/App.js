import { useState } from 'react';
import './App.css';
import Store from './helper/store/store';
import Home from './pages/home/Home';

function App() {

  const [databaseName, setDatabaseName] = useState('');
  const [collectionName, setCollectionName] = useState('');

  return (
    <div className="App">
      <Store.Provider
        value={
          {
            collectionName: collectionName,
            setCollectionName: (collection_name) => {
              setCollectionName(collection_name)
            },

            databaseName: databaseName,
            setDatabaseName: (db_name) => {
              setDatabaseName(db_name)
            }
          }
        }
      >
        <Home />
      </Store.Provider>
    </div>
  );
}

export default App;
