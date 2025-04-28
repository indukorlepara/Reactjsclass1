
import React, { useState } from 'react';

export function Home(){

    let [testing,updateTesting]=useState('testwork');
    let [name,updateName]=useState('');

    function fun1(){

        updateTesting('fianlworking');

    }
    const handleChange=(e)=>{
        updateName(e.target.value);
    }
    return (
        <div>Home page working
           
            <div>{testing}</div>
            <input type='button' value="Click" onClick={fun1}></input>
            <input type="text" value={name}  onChange={handleChange}
        placeholder="Enter your name"></input>
        {name}
            <button className="btn btn-primary">Click Me</button>
        </div>
        
    );
}