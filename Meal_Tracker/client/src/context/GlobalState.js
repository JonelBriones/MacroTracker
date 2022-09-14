import React, { createContext, useReducer, useState } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  meals: [
    {
      id: 1,
      mealName: 'Breakfast',
      carbs: 100,
      proteins: 20,
      fats: 10,
    },
    { id: 2, mealName: 'Lunch', carbs: 100, proteins: 20, fats: 10 },
    { id: 3, mealName: 'Dinner', carbs: 100, proteins: 20, fats: 10 },
    { id: 4, mealName: 'Snack', carbs: 100, proteins: 20, fats: 10 },
  ],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  function deleteMeal(id) {
    dispatch({
      type: 'DELETE_MEAL',
      payload: id,
    })
  }
  function addMeal(meal) {
    dispatch({
      type: 'ADD_MEAL',
      payload: meal,
    })
  }
  const [intake, setIntake] = useState(0)

  return (
    <GlobalContext.Provider
      value={{
        meals: state.meals,
        deleteMeal,
        addMeal,
        intake,
        setIntake,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
