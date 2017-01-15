// @flow

import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/CardStackStyle'

// Tinder
import Tinder from '../Components/Tinder.js'

// Children
// import Card from '../Components/Card'

class CardStack extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  /* grab cards from state, iterate over and insert Card components
    also show button
  */

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.cardStack}>
          <Tinder style={{flex: 1}}
                  data={[
                    {text: 'Tomato', backgroundColor: 'white'},
                    {text: 'Aubergine', backgroundColor: 'white'},
                    {text: 'Courgette', backgroundColor: 'white'},
                    {text: 'Blueberry', backgroundColor: 'white'},
                    {text: 'Umm...', backgroundColor: 'white'},
                    {text: 'orange', backgroundColor: 'white'},
                    ]}/>
        </View>
        <View style={styles.buttons}>
          <View style={styles.buttonsLeft}>
            <Text>BL</Text>
          </View>
          <View style={styles.buttonsRight}>
            <Text>BR</Text>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardStack)
