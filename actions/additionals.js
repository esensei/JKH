import {AsyncStorage} from 'react-native'
import axios from 'axios'

export function additionalHasErrored(bool) {
  return {
    type: 'ADDITIONALS_HAS_ERRORED',
    hasErrored: bool
  }
}

export function additionalIsLoading(bool) {
  return {
    type: 'ADDITIONALS_IS_LOADING',
    isLoading: bool
  }
}

export function additionalFetchDataSuccess(items) {
  return {
    type: 'ADDITIONALS_FETCH_DATA_SUCCESS',
    items
  }
}

export function additionalsFetchData() {
  const url = 'http://borolis.party/aboutme.php'
  return (dispatch) => {
    dispatch(additionalIsLoading(true))
    AsyncStorage.getItem('apitoken').then((value) => {
      axios.post(url, {
        apiToken: value
      },
      {
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }}
      )
        .then((response) => {
          dispatch(additionalIsLoading(false))
          dispatch(additionalFetchDataSuccess(response.data))
        })
        .catch(() => dispatch(additionalHasErrored(true)))
    })
  }
}
