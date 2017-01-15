// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/CardStyle'

export default class Card extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>Card Component</Text>
      </View>
    )
  }
}

// // Prop type warnings
// Card.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// Card.defaultProps = {
//   someSetting: false
// }
