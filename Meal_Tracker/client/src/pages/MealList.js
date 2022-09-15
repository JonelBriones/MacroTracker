import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
export const MealList = () => {
  const { meals, deleteMeal } = useContext(GlobalContext)
  const toggle = () => {}
  return (
    <>
      <h3 className="list__header">Meals Added</h3>
      {/* <ul className="list">
        {meals.map((meal) => (
          <li className="meals" key={meal.id}>
            {meal.mealName}
            <span>{(meal.carbs + meal.proteins) * 4 + meal.fats * 9}</span>
            <span>
              {meal.carbs}C {meal.proteins}P {meal.fats}F
            </span>
            <button className="" onClick={() => deleteMeal(meal.id)}>
              delete
            </button>
          </li>
        ))}
      </ul> */}
      <div className="list">
        {meals.map((meal) => (
          <div key={meal.id} className="meal__summmary-container">
            <div onClick={toggle} className="meal__summmary">
              <div className="meal__summmary__info">
                <h4>{meal.mealName}</h4>
                <h4>
                  {meal.carbs}g Carb, {meal.proteins}g Protein, {meal.fats}g
                  Fats
                </h4>
              </div>
              <div className="meal__total-cal">
                <h4>{(meal.carbs + meal.proteins) * 4 + meal.fats * 9}</h4>
                <span>kcal</span>
              </div>
              <button
                className="delete-btn"
                onClick={() => deleteMeal(meal.id)}>
                <span>delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
