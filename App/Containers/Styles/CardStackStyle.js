// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  cardStack: {
    height: 400,
    backgroundColor: '#eee'
  },
  buttons: {
    flexDirection: 'row',
    height: 150,
    backgroundColor: '#ee9'
  },
  buttonsLeft: {
    flex: 1,
    width: Metrics.screenWidth/2,
    backgroundColor: '#e34',
    padding: 10
  },
  buttonsRight: {
    flex: 1,
    width: Metrics.screenWidth/2,
    backgroundColor: '#e99',
    padding: 10
  }
})
