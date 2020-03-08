import React, { useState, useContext } from 'react';
import logo from './logo.svg';
import './App.css';

let fetch = [4, 3, 2, 1, 0, 0, 0, 0, 0].reverse(); // This will be where we grab from the API later

function blah (position) {
  console.log("BOOM!", position);
  spells.spellSlots[position] = spells.spellSlots[position] - 1;
  console.log(spells.spellSlots);
}

let spells = {
  spellSlots: fetch, // Remember this is reversed!
  setSpellSlots: blah
}

const SpellSlotContext = React.createContext()

function Pyramid() {
  const context = useContext(SpellSlotContext)
  const [spellSlots, setSpellSlots] = useState(context.spellSlots)

  const levelLabels = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth"].reverse();

  return (
    <div style={{margin: '10px'}}>
      {spellSlots.map((slots, index) => {
        return <Row slots={slots} label={levelLabels[index]} position={index} key={index} />
      })}
    </div>
  )
}

function Row({ slots, label, position }) {
  const context = useContext(SpellSlotContext)

  let checkboxes = [];
  for (let index = 0; index < slots; index++) {
    checkboxes.push(<Checkbox checked={true} key={index} position={position}/>)
  }

  return(
    <div style={{marginTop: '10px', border: '1px solid'}}>
      <label>{label}:</label> {checkboxes}
    </div>
  )
}

function Checkbox({ checked, position }) {
  const context = useContext(SpellSlotContext)

  function handleChange() {
    context.setSpellSlots(position)
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
