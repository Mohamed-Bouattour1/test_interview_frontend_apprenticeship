import './App.css';
import { useState } from 'react';



const Op = ({onclick , op})=>{
  return(
    <button className='Op-button' onClick={onclick}>{op}</button>
  )
}

const Greeting = ({name})=>{
  return(
    <h1>Hello,{name}!</h1>
  )
} 

function App() {
  const [counter , setCounter ] = useState(0)
  const handleOp = (dec)=>{
    if (dec === true) {
      setCounter(counter - 1)
    }else{
      setCounter(counter + 1)
    }
  }
  const names = ['Alice', 'Bob', 'Charlie', 'David'];

  return (
    <div className="App">
      <header className="App-header">
        <Greeting name={names[counter]} />
        <p>{counter}</p>
        <div className='App-buttons'>
          <Op onclick={() => handleOp(true)} op={"-"}/>
          <Op onclick={() => handleOp(false)} op={"+"}/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
