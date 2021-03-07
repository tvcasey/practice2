import logo from './logo.svg';
import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./Table";
import "@abcd19/st-grid/dist/index.css";
//import abcd19StGrid from './Components/MyTable';

function App() {

  return (
    <div className="App">      
      <Table />
          <p>HELLO WORLD</p>
    </div>
  );
}
export default App;

