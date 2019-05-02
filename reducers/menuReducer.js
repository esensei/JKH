const initState = {
  data: []
}

const menuReducer = (state = initState, action) => {
  if (action.type === 'menuFetched') {

    return {
      data: action.payload
    }
  }
  return state
}

export default menuReducer
