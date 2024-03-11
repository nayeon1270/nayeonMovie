import React, {useState} from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(0);
    const increment=()=>{
        setCount(count+1)
    }
    return (
        <div>
            <button onClick={increment}>
                click{count}
            </button>
            <button>{props.click}</button>
        </div>
    );
};

export default Counter;