const initState = {
  error: false,
  isLoading: false,
  services: []
}

const serviceReducer = (state = initState, action) => {
  switch (action.type) {
  case 'ITEMS_HAS_ERRORED':
    return {
      ...state,
      error: action.hasErrored
    }
  case 'ITEMS_IS_LOADING':
    return {
      ...state,
      isLoading: action.isLoading
    }
  case 'ITEMS_FETCH_DATA_SUCCESS':
    return {
      ...state,
      services: action.items
    }
  default:
    return state
  }
}

export default serviceReducer
