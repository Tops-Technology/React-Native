import React, { Component } from 'react'
import { View } from 'react-native'
import styles from '../styles/styles'
import Pickersss from '../components'

export default class AppContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Pickersss />
      </View>
    )
  }
}
