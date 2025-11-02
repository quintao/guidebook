import { Stack } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-get-random-values';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';
import {useState, useEffect} from 'react';
import {Text} from 'react-native';


SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);

const USER_ID_KEY = '@aititude:user_uuid';

const getOrCreateUserUUID = async () => {
  try {
    let uuid = await AsyncStorage.getItem(USER_ID_KEY);

    if (uuid === null) {
      const newUUID = uuidv4();
      await AsyncStorage.setItem(USER_ID_KEY, newUUID);
      console.log('Generated and stored new UUID:', newUUID);
      return newUUID;
    } else {
      // 4. ID found, return the existing one
      console.log('Retrieved existing UUID:', uuid);
      return uuid;
    }
  } catch (e) {
    console.error('Failed to get or create user UUID:', e);
    // Handle error case, perhaps return a temporary ID or 'unknown'
    return null; 
  }
};

export default function RootLayout() {
  const [userUUID, setUserUUID] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const initializeUser = async () => {
        const id = await getOrCreateUserUUID();
        setUserUUID(id);
        setIsLoading(false);
      };

      initializeUser();
    }, []);

    if (isLoading) {
      return <Text>Loading ...</Text>;
    }

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="sector" options={{ headerShown: false }} />
        {/* <Stack.Screen name="+not-found" /> */}
      </Stack>
      <StatusBar backgroundColor='#5c6c6c'/>
    </>
  );
}
