// @flow

import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles/HeaderStyle'
import { Images } from '../Themes'


export default class Header extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Image source={Images.segmented} />
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
