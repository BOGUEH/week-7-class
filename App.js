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

  const [count, setCount] = useState(1);
  const [isLog, setIslog] = useState(false);

  const handleClick = ()=>{
      setCount(count *78900999);
      };
 
    const changeLog = () =>{
      setIslog(!isLog);
    };
  return (
    <div className="App">
{/* creating a login and logout using a tenary operation */}
{/* using tenary operation */}
        {isLog ? <p>We are logged in</p>: <p>You have been logged out, try to log in</p>} 
      <button onClick= {changeLog}>
      {isLog ? <span>logout</span>: <span>login</span>} 
        </button>

        <Product count= {count}  handleClick= {handleClick} />

        {/* <First /> */}

    
    </div>
  );
}

export default App;
