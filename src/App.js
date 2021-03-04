import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyTable from "./Components/MyTable";
import "@abcd19/st-grid/dist/index.css";

function App() {
  return (
    <div className="App">
      <MyTable />
      Is there anybody out there?
    </div>
  );
}

export default App;
