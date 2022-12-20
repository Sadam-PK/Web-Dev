import React, { useState, useContext } from 'react'
import {UserInfo} from '../AppContext'

function FunctionalComponent() {
    let [userName, setUsername] = useContext(UserInfo)
    function increment() {
        setValue(getValue + 1)
    }
    function decrement() {
        setValue(getValue - 1)
    }

    let [getValue, setValue] = useState(10);
    return (
        <>
            <h1>Welcome on-board {userName} {getValue}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={()=>{setUsername('Nafi World..')}}>CHANGE</button>
        </>
    )
}

export default FunctionalComponent