import './App.css';
import './components/functionalComponents'
import FunctionalComponent from './components/functionalComponents';
import Prop from './prop';
import React,{useState} from 'react';
function App() {
  let [dataProp, setData] = useState('My Data')
  return (
    <div className="App">
      <header className="App-header">
        <FunctionalComponent data={dataProp}></FunctionalComponent>
        <Prop  data={[dataProp, setData]}></Prop>

      </header>
    </div>
  );
}

export default App;
