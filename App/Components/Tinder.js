import React from 'react'
import {StyleSheet, Text, View, ScrollView, Image, TouchableView, TouchableOpacity} from 'react-native'
import { Images } from '../Themes'
import SwipeCards from 'react-native-swipe-cards'
import addedBillsActions, { addBill } from '../Redux/addedBillsRedux'


let Card = React.createClass({
  // card needs to have click/touch event handler
  getInitialState() {
    return {
      preview: true
    }
  },
  handlePressPreview() {
    this.setState({ preview: !this.state.preview })
  },
  render() {
    return (
      <TouchableOpacity style={styles.card} onPress={this.handlePressPreview}>
        <Text style={styles.billTitle}>{this.props.billTitle}</Text>
        {  this.state.preview
           ?  <ScrollView>
                <View style={[styles.centered, styles.paddingTop]}>
                  <View style={styles.star}>
                    <Image source={Images.explodingStar} style={styles.starSpace}/>
                    <Text style={styles.billHighlight}>{this.props.billHighlight1}</Text>
                  </View>
                  <View style={styles.star}>
                    <Image source={Images.explodingStar} style={styles.starSpace}/>
                    <Text style={styles.billHighlight}>{this.props.billHighlight2}</Text>
                  </View>
                    <Text style={[styles.permaText, styles.paddingTop]}>BILL INTRODUCED</Text>
                    <Text style={styles.billDate}>{this.props.billDate}</Text>
                    <Text style={styles.permaText}>SPONSOR</Text>
                    <Text style={this.props.party ===  'democrat' ? styles.democrat : styles.republican}>{this.props.billSponsor}</Text>
                    <View style={styles.dots}>
                      <Image source={Images.dots}/>
                    </View>
                    </View>
                </ScrollView>
          : <ScrollView>
              <View>
                <Text style={styles.expanded}>{this.props.billExpandedBlock}</Text>
                <Text style={styles.permaText}>PEOPLE WHO SUPPORTED THIS BILL</Text>
                <Image style={styles.paddingBottom} source={Images.social} />
                <Text style={styles.permaText}>DO YOU SUPPORT THIS BILL?</Text>
                <Image style={styles.paddingBottom} source={Images.thumbsupDown} />
                <Image style={[styles.paddingBottom, styles.paddingTopMore]} source={Images.alerts} />


              </View>
            </ScrollView>
        }



      </TouchableOpacity>
    )
  }
})

// const Cards = { this.props.data }

export default React.createClass({
  getInitialState() {
    return {
      cards: [] // Cards -- don't need, see line 16
    }
  },
  handleYup (bill) {

  },
  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  },
  render() {
    return (
      <SwipeCards
        cards={this.props.data}
        handleYup={this.props.handleYup}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleNope={this.handleNope}
        noText={"Don't Care"}
        yupText={"I'm Interested"}
        containerStyle={styles.container}
      />
    )
  }
})

const styles = StyleSheet.create({
  paddingBottom: {
    paddingBottom: 10, marginBottom: 10
  },
  paddingTop: {
    paddingTop: 30
  },
  paddingTopMore: {
    marginTop: 10
  },
  expanded: {
    fontSize: 13,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 0,
    marginTop: 0,
    marginBottom: 10
  },
  card: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    width: 300,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 15
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f0ff'
  },
  billTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 2,
    paddingRight: 2,
    marginBottom: 15,
    marginTop: 20
  },
  billHighlight: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16
  },
  billDate: {
    fontSize: 16,
    marginBottom: 20
  },
  billSponsor: {
    fontSize: 16,
    marginBottom: 20
  },
  permaText: {
    fontSize: 14,
    color: '#999',
    paddingBottom: 5
  },
  star: {
    flexDirection: 'row',
    paddingLeft: 0,
    marginLeft: 0
  },
  starSpace: {
    marginRight: 10
  },
  bottomMargin: {
    marginBottom: 50
  },
  democrat: {
    color: 'blue'
  },
  republican: {
    color: 'red',
    fontSize: 16,
    marginBottom: 20
  },
  independent: {
    color: 'green',
    fontSize: 16,
    marginBottom: 20
  },
  hidden: {
    flex: 1
  },
  show: {
    flex: 1
  },
  dots: {
    marginTop: 10,
    alignItems: 'flex-end'
  }
})