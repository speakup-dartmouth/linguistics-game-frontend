import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { NativeModules } from 'react-native';
import {API_CLIENT, API_KEY} from '@env';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  axios.defaults.headers.common['API_KEY'] = API_KEY // add API_KEY to all requests

  const signUp = (username, email, password) => {
    console.log({ username, email, password });
    setIsLoading(true);
    axios
      .post(`${API_CLIENT}/signup`, {
        username,
        email,
        password,
      })
      .then((res) => {
        const userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        // console.log(userInfo);
      })
      .catch((e) => {
        console.log(`signup error ${e}`);
        setIsLoading(false);
      });
  };

  const logIn = (email, password) => {
    console.log(`${API_CLIENT}/signin`);
    console.log({ email, password });
    setIsLoading(true);
    axios
      .post(`${API_CLIENT}/signin`, {
        email,
        password,
      })
      .then((res) => {
        console.log("made it here!");
        const userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`signin error ${e}`);
        setIsLoading(false);
      });
  };

  const logOut = () => {
    setIsLoading(true);
    try {
      AsyncStorage.clear();
      NativeModules.DevSettings.reload();
      setIsLoading(false);
    } catch (e) {
      console.log(`logout error ${e}`);
      setIsLoading(false);
    }
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);

    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        signUp,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}