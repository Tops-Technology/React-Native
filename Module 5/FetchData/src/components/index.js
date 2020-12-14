import React, { Component } from 'react'
import { View } from 'react-native'
import styles from '../styles/styles'
import PickerList from './pickers/picker'
import PostList from './post/post'

export default class Pickersss extends Component {
  state = {
    selected: 'Games'
  }

  updateSelected = (select) => {
    this.setState({ selected: select })
  }


  render(){
    return(
      <View>
        <PickerList
          selected={this.state.selected}
          updateSelected={this.updateSelected}
          options={['Pokemon', 'Games', 'React']}/>
        <PostList />
      </View>
    )
  }
}
