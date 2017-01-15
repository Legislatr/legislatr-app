// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/HeaderStyle'

export default class Header extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.headerText}>
          <Text>Federal | Local</Text>
        </View>
      </View>
    )
  }
}

// // Prop type warnings
// Header.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// Header.defaultProps = {
//   someSetting: false
// }
