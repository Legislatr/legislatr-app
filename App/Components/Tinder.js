import React from 'react'
import {StyleSheet, Text, View, ScrollView, Image, TouchableView, TouchableOpacity} from 'react-native'
import { Images } from '../Themes'
import SwipeCards from 'react-native-swipe-cards'

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
           ?
                <ScrollView>
                  <View style={styles.star}>
                    <Image source={Images.explodingStar} style={styles.starSpace}/>
                    <Text style={styles.billHighlight}>{this.props.billHighlight1}</Text>
                  </View>
                  <View style={[styles.star, styles.bottomMargin]}>
                    <Image source={Images.explodingStar} style={styles.starSpace}/>
                    <Text style={styles.billHighlight}>{this.props.billHighlight2}</Text>
                  </View>
                </ScrollView>
          :
            <Text/>
              }


        <Text style={styles.permaText}>BILL INTRODUCED</Text>
        <Text style={styles.billDate}>{this.props.billDate}</Text>
        <Text style={styles.permaText}>SPONSOR</Text>
        <Text style={this.props.party ===  'democrat' ? styles.democrat : styles.republican}>{this.props.billSponsor}</Text>
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
  handleYup (card) {
    console.log(`Yup for ${card.text}`)
  },
  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  },
  render() {
    return (
      <SwipeCards
        cards={this.props.data}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        noText={"Don't Care"}
        yesText={"I'm Interested"}
        containerStyle={styles.container}
      />
    )
  }
})

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    width: 300,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 15
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
    padding: 10,
    marginBottom: 30,
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
    color: '#999'
  },
  star: {
    flexDirection: 'row'
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
  }
})