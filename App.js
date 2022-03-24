import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView} from 'react-native';
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

const App=()=> {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar />
      <Header />
      <AlbumList />
    </SafeAreaView>
  );
}

export default App;