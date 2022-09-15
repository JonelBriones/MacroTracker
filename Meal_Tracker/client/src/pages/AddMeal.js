import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
export const AddMeal = () => {
  const { addMeal, meals } = useContext(GlobalContext)

  const [carbs, setCarbs] = useState('')
  const [proteins, setProteins] = useState('')
  const [fats, setFats] = useState('')
  const [mealName, setMealName] = useState('')
  //   const [macros, setMacros] = useState({
  //     mealName: '',
  //     carbs: 0,
  //     proteins: 0,
  //     fats: 0,
  //   })
  const onSubmit = (e) => {
    e.preventDefault()
    const newMeal = {
      id: Math.floor(Math.random() * 100000000),
      mealName: mealName === '' ? 'Meal ' + (meals.length + 1) : mealName,
      carbs: +carbs,
      proteins: +proteins,
      fats: +fats,
    }
    setCarbs('')
    setProteins('')
    setFats('')
    setMealName('')
    addMeal(newMeal)
  }
  return (
    <>
      <h3>Create Meal</h3>
      <form action="" onSubmit={onSubmit}>
        <div className="form__container">
          <div className="form-control">
            <label htmlFor="mealName">
              {mealName === '' ? 'Meal ' + (meals.length + 1) : mealName}
            </label>
            <input
              type="text"
              placeholder="Edit"
              value={mealName}
              onChange={(e) => setMealName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="carbs">Carbs</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={carbs}
              onChange={(e) => setCarbs(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="proteins">Proteins</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={proteins}
              onChange={(e) => setProteins(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="fats">Fats</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={fats}
              onChange={(e) => setFats(e.target.value)}
            />
          </div>
        </div>
        <button
          className={
            carbs === '' || fats === '' || proteins === ''
              ? 'btn disable'
              : 'btn'
          }
          disabled={carbs === '' || fats === '' || proteins === ''}>
          {carbs === '' || fats === '' || proteins === ''
            ? 'Macros cannot be empty'
            : 'Add Meal'}
        </button>
      </form>
    </>
  )
}
