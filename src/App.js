import React from 'react'
import Header from './components/Header/Header';
import DataTable from './components/DataTable/DataTable'
import 'devextreme/dist/css/dx.light.css';

function App() {
  return (
    <div className="App" >
      <Header/>
      <DataTable/>
    </div>
  )
}

export default App;
