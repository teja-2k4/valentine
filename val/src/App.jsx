import { useState ,useEffect} from 'react';
import React from 'react';
import Heart from "./Heart"
import './App.css';

const App = () => {
  
  const [word,setword] = useState('');
  let i = 0;
  const arr = ['B','A','N','G','A','R','A','M','😘','😘','😘','😘','😘'];
  useEffect(
    ()=>{
        setInterval(() =>{
            if(i < arr.length){
                let com = arr[i];
                i++;
                setword(prev =>[prev,com]);        
            }
            else{
                i = 0;
                setword('');
            }
        },600);
    } ,[]
    
);
  return (
    <div className="app">
      <h1>Happy Valentine's Day!</h1>
      <Heart />
      <p>To my Beautyfull Wife<br/>
      {word}</p>
      <Heart />
      <Heart />
    </div>
  );
};

export default App;