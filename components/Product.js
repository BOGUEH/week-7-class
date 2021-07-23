import React, {useState} from 'react';

export default function Product() {
    const [count, setCount] = useState(1);
    const handleClick = ()=>{
        setCount(count *5)

    }
    return (
        <div>
            <p>{count}</p>
            <button onClick ={handleClick}>click</button>
        </div>
    );
}
