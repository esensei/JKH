const initState = {
  error: false,
  isLoading: false,
  alerts: []
}

const alertReducer = (state = initState, action) => {
  switch (action.type) {
  case 'ALERTS_HAS_ERRORED':
    return {
      ...state,
      error: action.hasErrored
    }
  case 'ALERTS_IS_LOADING':
    return {
      ...state,
      isLoading: action.isLoading
    }
  case 'ALERTS_FETCH_DATA_SUCCESS':
    return {
      ...state,
      alerts: action.items
    }
  default:
    return state
  }
}

export default alertReducer
