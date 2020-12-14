import React from 'react'
import { Text, Button } from 'react-native'

class Counter extends React.Component {
    state = {
        counter: 0
    }

    render() {
        const { counter } = this.state
        return (
            <>
                <Text>{counter}</Text>
                <Button onPress={() => {}} title="Increment" />
                <Button onPress={() => {}} title="Decrement" />
            </>
        )
    }
}