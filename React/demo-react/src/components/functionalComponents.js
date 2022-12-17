import React,{useState} from 'react'


function FunctionalComponent(){
    function increment(){
        setValue(getValue+1)
    }
    function decrement(){
        setValue(getValue-1)
    }
let [getValue, setValue] = useState(10);
    return (
        <>
            <h1>Welcome on-board {getValue}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default FunctionalComponent