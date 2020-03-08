import React, { useState, useContext } from 'react';
import logo from './logo.svg';
import './App.css';

const fetch = [4, 3, 1] // This will be where we grab from the API later
const spells = {
  spellSlots: fetch.reverse(),
  setSpellSlots: () => {
    console.log("BOOM!")
  }
}
const SpellSlotContext = React.createContext(spells)

function Pyramid() {
  const context = useContext(SpellSlotContext)

  return (
    <div style={{margin: '10px', border: '1px solid'}}>
      {context.spellSlots.map((slots, index) => {
        return <Row slots={slots} key={index} />
      })}
    </div>
  )
}

function Row({ slots }) {
  const context = useContext(SpellSlotContext)

  let checkboxes = [];
  for (let index = 0; index < slots; index++) {
    checkboxes.push(<Checkbox checked={true} key={index}/>)
  }

  return(
    <div style={{marginTop: '10px', border: '1px solid'}}>
      {checkboxes}
    </div>
  )
}

function Checkbox({ checked }) {
  const context = useContext(SpellSlotContext)

  function handleChange() {
    context.setSpellSlots()
  }

  return <input type='checkbox' defaultChecked={checked} onClick={handleChange}></input>
}

function App() {
  return (
    <div className="App">
      <SpellSlotContext.Provider value={spells}>
        <Pyramid />
      </SpellSlotContext.Provider>
    </div>
  );
}

export default App;
