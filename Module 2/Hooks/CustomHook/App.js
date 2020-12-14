import React from 'react';
import { Button } from 'react-native';
import useOrderCountHook from './useOrderCount';

export default function App() {
  const orderHook = useOrderCountHook();
  return (
    <View>
      <Text>count:{orderHook.orderCount.count}</Text>
      <Button type='button' onClick = 
        {orderHook.changeOrderCount}>Increment</Button>
   </View>
  );
}