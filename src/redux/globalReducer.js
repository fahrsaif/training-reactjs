const globalState = {
  totalOrder: 10
}

const rootReducer = (state = globalState, action) => {
  if (action.type === "ADD_ORDER") {
    return {
      ...state,
      totalOrder: state.totalOrder + 1
    }
  }
  if (action.type === "SUBSTRACT_ORDER") {
    let totalOrder = 0
    if (state.totalOrder > 0) {
      totalOrder = state.totalOrder - 1
    }
    return {
      ...state,
      totalOrder: totalOrder
    }
  }
  return state
}

export default rootReducer