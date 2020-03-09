import React, { useState, useContext } from 'react';
import logo from './logo.svg';
import './App.css';

const SpellSlotContext = React.createContext()

function Pyramid() {
  const { spellSlots } = useContext(SpellSlotContext)
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
  const { setSpellSlots } = useContext(SpellSlotContext)

  let checkboxes = [];
  for (let index = 0; index < slots; index++) {
    checkboxes.push(
      <Checkbox
        defaultChecked={true}
        onChange={() => {setSpellSlots(position)}}
        key={index}
      />
    )
  }

  return(
    <div style={{marginTop: '10px', border: '1px solid'}}>
      <label>{label}:</label> {checkboxes}
    </div>
  )
}

function Checkbox(props, { checked }) {
  return <input type='checkbox' defaultChecked={checked} {...props}></input>
}

function App() {
  const [spellSlots, setSpellSlots] = useState([4, 3, 2, 1, 0, 0, 0, 0, 0].reverse());

  function uncheckSlot (position) {
    let newSpellSlots = [...spellSlots]
    newSpellSlots[position] = spellSlots[position] - 1
    setSpellSlots(newSpellSlots);
  }

  const spells = { spellSlots: spellSlots, setSpellSlots: uncheckSlot }

  return (
    <div className="App">
      <SpellSlotContext.Provider value={spells}> // TODO: Fix weird unchecked box on re-render
        <Pyramid />
      </SpellSlotContext.Provider>
    </div>
  );
}

export default App;
