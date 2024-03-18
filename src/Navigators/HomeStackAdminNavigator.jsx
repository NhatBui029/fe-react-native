import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from '../Screens/ChatScreen';
import RightHeaderChat from '../Components/RightHeaderChat';
import ListChatScreen from '../Screens/ListChatScreen';
import React,{ useRef } from 'react';

const Stack = createStackNavigator();

function HomeStackNavigator() {
  const nameRef = useRef();

  return (
    <>
      <Stack.Navigator
        screenOptions={
          { headerShown: false }
        }
      >
        <Stack.Screen name="ListChat" component={ListChatScreen} />
        <Stack.Screen name="ChatAdmin" component={ChatScreen}
        />
      </Stack.Navigator>
    </>
  );
}

export default HomeStackNavigator