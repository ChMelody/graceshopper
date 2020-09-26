import axios from 'axios'

const SET_SINGLE_BOOK = 'SET_SINGLE_BOOK'

//action creators
export const setSingleBook = data => {
  return {
    type: SET_SINGLE_BOOK,
    singleBook: data
  }
}

//thunk creators
export const fetchSingleBook = id => {
  return async dispatch => {
    const {data} = await axios.get(`/api/books/${id}`)
    // console.log('data', data)
    await dispatch(setSingleBook(data))
  }
}

const initialState = {
  singleBook: {}
}

export default function singleBookReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_BOOK:
      return {...state, singleRobot: action.singleBook}
    default:
      return state
  }
}
