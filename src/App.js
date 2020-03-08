import React, { useState, useContext } from 'react';
import logo from './logo.svg';
import './App.css';

const SpellSlotContext = React.createContext()

function Pyramid() {
  const context = useContext(SpellSlotContext)
  const levelLabels = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth"].reverse();

  return (
    <SpellSlotContext.Consumer>
      {({ spellSlots }) => (
        <div style={{margin: '10px'}}>
        {spellSlots.map((slots, index) => {
          return <Row slots={slots} label={levelLabels[index]} position={index} key={index} />
        })}
        </div>
      )}
    </SpellSlotContext.Consumer>
  )
}

function Row({ slots, label, position }) {
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
  const [spellSlots, setSpellSlots] = useState([4, 3, 2, 1, 0, 0, 0, 0, 0].reverse());

  function uncheckSlot (position) {
    spellSlots[position] = spellSlots[position] - 1
    console.log(spellSlots);
    setSpellSlots(spellSlots);
  }

  return (
    <div className="App">
      <SpellSlotContext.Provider value={{ spellSlots: spellSlots, setSpellSlots: uncheckSlot }}>
        <Pyramid />
      </SpellSlotContext.Provider>
    </div>
  );
}

export default App;
