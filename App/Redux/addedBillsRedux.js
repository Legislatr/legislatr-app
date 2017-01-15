import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addedBillsRequest: ['data'],
  addedBillsSuccess: ['payload'],
  addedBillsFailure: null,
  addedBillsAddBill: ['bill']
})

export const AddedBillsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
  bills: []
})

/* ------------- Reducers ------------- */

export const addBill = (state, { bills }) => {
  state.merge({ fetching: null, data: null, payload: null, bills})
}

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.added_Bills_REQUEST]: request,
  [Types.added_Bills_SUCCESS]: success,
  [Types.added_Bills_FAILURE]: failure,
  [Types.added_Bills_ADDBILL]: addBill,

})
