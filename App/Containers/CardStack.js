// @flow

import React from 'react'
import { ScrollView, title, View, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import addedBillsActions, { addBill } from '../Redux/addedBillsRedux'

// Styles
import styles from './Styles/CardStackStyle'
import { Images } from '../Themes'

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
                  loop={true}
                  handleYup={this.props.addBill}
                  data={[
                    {
                      billTitle: 'Minimum Wage - Original Living Wage Act of 2017',
                      billHighlight1: 'Federal Minimum Wage Be Recalculated Every 4 Years',
                      billHighlight2: 'Federal Minimum Wage Be Recalculated Every 4 Years',
                      billDate: 'January 3, 2017',
                      billSponsor: 'Rep. Mike Huckabee (ND)',
                      party: 'republican',
                      billExpandedBlock: 'Lorem ipsum dolor sit ipsum dolor sit amet,Lorem ipsum dolor sit amet  efficitur lobortis massa. Proin iaculis non magna  eget leo a aliquet. blandit bibendum, mauris sapien mattis...   Read More',

                  },
                    {
                      billTitle: 'Minimum Wage - Original Living Wage Act of 2017',
                      billHighlight1: 'Living Wage Be No Less Than 15% Of Poverty Threshold',
                      billHighlight2: 'Federal Minimum Wage Be Recalculated Every 4 Years',
                      billDate: 'January 3, 2017', billSponsor: 'Rep. Mike Huckabee (ND)',
                      party: 'democrat',
                      billExpandedBlock: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh leo, laoreet nec felis at, efficitur lobortis massa. Proin iaculis non magna vel fringilla. Duis lobortis eget leo a aliquet. blandit bibendum, mauris sapien mattis...   Read More'
                    },
                    {
                      billTitle: 'Minimum Wage - Original Living Wage Act of 2017',
                      billHighlight1: 'Living Wage Be No Less Than 15% Of Poverty Threshold',
                      billHighlight2: 'Federal Minimum Wage Be Recalculated Every 4 Years',
                      billDate: 'January 3, 2017', billSponsor: 'Rep. Mike Huckabee (ND)',
                      party: 'republican',
                      billExpandedBlock: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh leo, laoreet nec felis at, efficitur lobortis massa. Proin iaculis non magna vel fringilla. Duis lobortis eget leo a aliquet. blandit bibendum, mauris sapien mattis...   Read More'
                    },
                    ]}/>
        </View>

        <View style={styles.buttons}>
          <View style={styles.buttonsLeft}>
          <Image source={Images.x} onPress={console.log('goodbye')} />
          </View>
          <View style={styles.buttonsRight}>
            <Image source={Images.heart} onPress={console.log('hello')} />
          </View>
        </View>
      </View>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    addedBills: state.addedBills.addedBills
  }
}

// this.props.addBill

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     logout: () => dispatch(LoginActions.logout()),
//     requestTemperature: (city) => dispatch(TemperatureActions.temperatureRequest(city))
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(CardStack)
