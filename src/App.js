import React, { useState, useContext } from 'react';
import logo from './logo.svg';
import './App.css';

const blah = {
  spellSlots: [true, true, false],
  setSpellSlots: () => {
    console.log("BOOM!")
  }
}
const SpellSlotContext = React.createContext(blah)

function Blah() {
  const context = useContext(SpellSlotContext)
  const [gotCheckUpdate, setGotCheckUpdate] = useState('Not yet...')
  console.log("SPELL SLOTS", context);
  return(
    <div style={{marginTop: '10px', border: '1px solid'}}>
      {context.spellSlots.map((slotFilled, index) => {
        return <Checkbox checked={slotFilled} key={index}/>
      })}
      <div>{gotCheckUpdate}</div>
    </div>
  )
}

function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(props.checked)

  return <input type='checkbox' defaultChecked={isChecked}></input>
}

function App() {
  return (
    <div className="App">
      <SpellSlotContext.Provider value={blah}>
        <Blah />
      </SpellSlotContext.Provider>
    </div>
  );
}

export default App;
