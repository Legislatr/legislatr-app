import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/likedCardsRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.likedCardsRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.likedCardsSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.likedCardsFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
