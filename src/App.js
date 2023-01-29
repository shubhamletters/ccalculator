import React,{useState,useEffect,useRef} from 'react';
import './App.css';

function App() {
  const [result,setResult]=useState("");
  const inputRef=useRef(null);
  useEffect(()=>inputRef.current.focus());
  function click(event){
    setResult(result.concat(event.target.name));
  }
  function backspace() {
    setResult(result.slice(0,-1));
  }
  function clear() {
    setResult("");
    
  }
  function final() {
    try {
      setResult(eval(result)+"");
      
    } catch (error) {
      setResult("Error");
    }
    
  }

   
  return (
    <div className="calc">
      <form>
        <input type="text" value={result} ref={inputRef}/>
      </form>
      <div className="key">
      <button className='design' id='clear' onClick={clear}>Clear</button>
      <button className='design' id='backspace' onClick={backspace}>C</button>
      <button className='design' name='+' onClick={click}>+</button>
      <button className='design' name='7' onClick={click}>7</button>
      <button className='design' name='8' onClick={click}>8</button>
      <button className='design' name='9' onClick={click}>9</button>
      <button className='design' name='-' onClick={click}>-</button>
      <button className='design' name='4' onClick={click}>4</button>
      <button className='design' name='5' onClick={click}>5</button>
      <button className='design' name='6' onClick={click}>6</button>
      <button className='design' name='*' onClick={click}>* </button>
      <button className='design' name='1' onClick={click}>1</button>
      <button className='design' name='2' onClick={click}>2</button>
      <button className='design' name='3' onClick={click}>3</button>
      <button className='design' name='/' onClick={click}>/</button>
      <button className='design' name='0' onClick={click}>0</button>
      <button className='design' name='.' onClick={click}>.</button>
      <button className='design' id='result' onClick={final}>result</button>
      </div>
    </div>
    
  );
}

export default App;
