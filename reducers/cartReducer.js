const initState = {
  items: [
    {id: 0,
      title: 'Пицца Винченцо фирменная',
      composition: 'Бекон, Лосось, Лук красный, Моцарелла, укроп',
      countSelector: true,
      weight: 1000,
      count: 0,
      cost: 400}
  ],
  total: 0
}
const productsReducer = (state = initState, action) => {
  if (action.type === 'addToCart') {
    const addedItem = state.items.find(item => item.id === action.product.id)
    if (addedItem) {
      addedItem.count += action.product.count
      return {
        ...state,
        total: state.total + (addedItem.cost * action.product.count)
      }
    }
    return {
      ...state,
      items: [...state.items, action.product],
      total: state.total + (action.product.cost * action.product.count)
    }
  }
  if (action.type === 'menuFetched') {
    return {
      ...state,
      menuItems: action.payload
    }
  }
  if (action.type === 'orderDone') {
    return initState
  }
  return state
}


export default productsReducer
