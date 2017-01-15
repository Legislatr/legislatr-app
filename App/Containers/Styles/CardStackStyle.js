// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0
  },
  cardStack: {
    height: 410,
    marginBottom: 20
  },
  buttons: {
    flexDirection: 'row',
    height: 80,
  },
  buttonsLeft: {
    flex: 1,
    width: Metrics.screenWidth/2,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsRight: {
    flex: 1,
    width: Metrics.screenWidth/2,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
