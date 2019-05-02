import {AsyncStorage} from 'react-native'
import axios from 'axios'

export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  }
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  }
}

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  }
}

export function servicesFetchData() {
  const url = 'http://borolis.party:3000/api/v1'
  return (dispatch) => {
    dispatch(itemsIsLoading(true))
    AsyncStorage.getItem('apitoken').then((value) => {
      axios.post(url, {
        apiToken: value, query: 'getBusinessesList'
      },
      {
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }}
      )
        .then((response) => {
          dispatch(itemsIsLoading(false))
          dispatch(itemsFetchDataSuccess(response.data))
        })
        .catch(() => dispatch(itemsHasErrored(true)))
    })
  }
}
