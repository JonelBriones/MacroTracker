import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
export const Macros = () => {
  const { meals, intake } = useContext(GlobalContext)
  const carbs = meals.map((meal) => meal.carbs)
  const totalCarbs = carbs.reduce((calorie, macro) => (calorie += macro), 0)
  const proteins = meals.map((meal) => meal.proteins)
  const totalProteins = proteins.reduce(
    (calorie, macro) => (calorie += macro),
    0
  )
  const fats = meals.map((meal) => meal.fats)
  const totalFats = fats.reduce((calorie, macro) => (calorie += macro), 0)

  const totalCalories = (totalCarbs + totalProteins) * 4 + totalFats * 9
  return (
    <>
      <h3>
        Total Calories:{' '}
        <span
          className={
            intake > 999
              ? totalCalories > intake
                ? 'total-calories active'
                : null
              : null
          }>
          {totalCalories}
        </span>
      </h3>
      <h3>Goal Intake: {intake}</h3>
      <h4>Remaining: {intake - totalCalories}</h4>
    </>
  )
}
