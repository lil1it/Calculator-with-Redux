export const calculatorActionType = {
    ADD: "ADD",
    SUBTRACT: "SUBTRACT",
    MULTIPLY: "MULTIPLY",
    DIVIDE: "DIVIDE",
  };
  
  const initialState = {
    result: 0,
  };
  
 export const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
      case calculatorActionType.ADD:
        return { ...state, result: state.result + action.payload };
      case calculatorActionType.SUBTRACT:
        return { ...state, result: state.result - action.payload };
      case calculatorActionType.DIVIDE:
        return { ...state, result: state.result / action.payload };
      case calculatorActionType.MULTIPLY:
        return { ...state, result: state.result * action.payload };
      default:
        return state;
    }
  };
  