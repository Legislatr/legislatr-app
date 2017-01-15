import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/addedBillsRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.addedBillsRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.addedBillsSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.addedBillsFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
