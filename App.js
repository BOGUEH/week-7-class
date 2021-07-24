import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Button2 from "./components/Button2";
import Card from "./components/card";
import UserCard from "./UserCard.js";
import  First from '../src/components/first.js'
import  Product from '../src/components/Product.js'
import {useState} from 'react';

function App() {

  const [count, setCount] = useState(0);

  const handleClick = ()=>{
      setCount(count +5);

  };
 

  return (
    <div className="App">

        <Product count= {count}  handleClick= {handleClick} />
        {/* <First /> */}

    
    </div>
  );
}

export default App;
