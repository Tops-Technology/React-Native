import React, { Component } from 'react'
import { Picker, Text } from 'react-native'
import styles from '../../styles/styles'
import PickerItems from './pickerItems'

export default class PickerList extends Component {
  render() {
    const { selected, updateSelected, options } = this.props
    return(
      <Picker
        style={styles.picker}
        selectedValue={this.props.selected}
        onValueChange={this.props.updateSelected}
      >
      {options.map(option =>
          <PickerItems
            label={option}
            value={option}
            key={option}
          />)
      }
      </Picker>
    )
  }
}
