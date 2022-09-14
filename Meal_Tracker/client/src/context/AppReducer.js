export default (state, action) => {
  switch (action.type) {
    case 'DELETE_MEAL':
      return {
        ...state,
        meals: state.meals.filter((meal) => meal.id !== action.payload),
      }
    case 'ADD_MEAL':
      return {
        ...state,
        meals: [action.payload, ...state.meals],
      }
    default:
      return state
  }
}
