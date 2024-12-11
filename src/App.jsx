import { useState,useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "QWERTYUIOOPASDFGHJKLZXCVBNM"

    if(number) str +="1234567890"
    if(char)  str +="!@#$%^&*():"

    for (let i = 0; i < length; i++) {
      let randomInt = Math.floor(Math.random() * (str.length + 1));
      // console.log(randomInt);
      pass += str.charAt(randomInt)
                
    }

    setPassword(pass);

  },[length,number,char,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,number,char])

  return (
    <>
      <div className="container">
        <div>
          <h1>Password Generator</h1>
          <input type="text"
          className='inputbox'
          value={password}
          placeholder='Enter the password'
          readOnly
          />
          <button className='copy-button'>Copy</button>
        </div>
      
        <div className="setting">
          <div className="length-setter">
            <label>Length: {length}</label>
            <input type="range" 
              className='length-setter'
              value = {length}
              min={6}
              max={20}
              onChange={(e)=>setLength(e.target.value)}
            />
          </div>
          <div className="number-setter">
            <label>Number: </label>
            <input type="checkbox"
              defaultChecked = {number}
              id = "number-input"
              onChange={()=>{
                setNumber((prev)=>!prev)
              }} 
            />
          </div>
          <div className="char-setter">
            <label>Characters: </label>
            <input type="checkbox"
              defaultChecked = {char}
              id = "char-input"
              onChange={()=>{
                setChar((prev)=>!prev)
              }} 
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
