import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const MacroGoals = () => {
  const { intake, setIntake } = useContext(GlobalContext)
  return (
    <div className="macro-goals-container">
      {/* <h4>Intake: {intake}</h4> */}
      <div className="intake">
        <input
          type="number"
          min={0}
          max={4000}
          value={intake}
          onChange={(e) => setIntake(e.target.value)}
          className="intake__number"
        />
        <input
          type="range"
          min={0}
          max={4000}
          value={intake}
          onChange={(e) => setIntake(e.target.value)}
          className="intake__slider"
        />
      </div>
      {/* <button className="">Enter Intake Goal</button> */}
    </div>
  )
}
