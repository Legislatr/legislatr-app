// import { createReducer, createActions } from 'reduxsauce'
// import Immutable from 'seamless-immutable'
//
// /* ------------- Types and Action Creators ------------- */
//
// const { Types, Creators } = createActions({
//   likedCardsRequest: ['data'],
//   likedCardsSuccess: ['payload'],
//   likedCardsFailure: null
// })
//
// export const LikedCardsTypes = Types
// export default Creators
//
// /* ------------- Initial State ------------- */
//
// export const INITIAL_STATE = Immutable({
//   cards: [],
//   fetching: null,
//   data: null,
//   payload: null
// })
//
// /* ------------- Reducers ------------- */
//
// export const addCard = (state: Object, { data }) => {
//   state.merge({ fetching: false, })
// }
//
// // request the data from an api
// export const request = (state, { data }) => {
//   state.merge({ fetching: true, data, payload: null })
// }
//
// // successful api lookup
// export const success = (state, action) => {
//   const { payload } = action
//   return state.merge({ fetching: false, error: null, payload })
// }
//
// // Something went wrong somewhere.
// export const failure = state =>
//   state.merge({ fetching: false, error: true, payload: null })
//
// /* ------------- Hookup Reducers To Types ------------- */
//
// export const reducer = createReducer(INITIAL_STATE, {
//   [Types.liked_Cards_REQUEST]: request,
//   [Types.liked_Cards_SUCCESS]: success,
//   [Types.liked_Cards_FAILURE]: failure,
//   [Types.liked_Cards_ADDCARD]: addCard
// })
