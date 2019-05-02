import {AsyncStorage} from 'react-native'
import axios from 'axios'

export function alertsIsError(bool) {
  return {
    type: 'ALERTS_HAS_ERRORED',
    hasErrored: bool
  }
}

export function alertsIsLoading(bool) {
  return {
    type: 'ALERTS_IS_LOADING',
    isLoading: bool
  }
}

export function alertsFetchDataSuccess(items) {
  return {
    type: 'ALERTS_FETCH_DATA_SUCCESS',
    items
  }
}

export function alertsFetchData() {
  const url = 'http://borolis.party/getalerts.php'
  return (dispatch) => {
    dispatch(alertsIsLoading(true))
    AsyncStorage.getItem('apitoken').then((value) => {
      axios.post(url, {
        apitoken: value
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          dispatch(alertsIsLoading(false))
          let arrayResult = []
          for (const currentArray of response.data.alerts) {
            arrayResult = arrayResult.concat(currentArray)}
          dispatch(alertsFetchDataSuccess(arrayResult))
        })
        .catch(() => dispatch(alertsIsError(true)))
    })
  }
}
