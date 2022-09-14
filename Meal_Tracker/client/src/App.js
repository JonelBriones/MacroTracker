import './App.css'
import { AddMeal } from './pages/AddMeal'
import { Header } from './pages/Header'
import { Macros } from './pages/Macros'
import { MealList } from './pages/MealList'
import { GlobalProvider } from './context/GlobalState'
import { MacroGoals } from './pages/MacroGoals'
import React, { useState } from 'react'

function App() {
  return (
    <div className="container">
      <GlobalProvider>
        <div className="container__tracker">
          <Header />
          <Macros />
          <MacroGoals />
          <AddMeal />
        </div>
        <div className="container__meals">
          <MealList />
        </div>
      </GlobalProvider>
    </div>
  )
}

export default App
