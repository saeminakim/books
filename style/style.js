import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: '#2f3c7e',
    fontWeight: 'bold',
    fontSize: 16
  },
  textContainer: {
    textAlign: 'center',
    height: 250,
    borderWidth: 2,
    borderColor: '#2F3C7E',
    borderRadius: 10,
  },
  thumbnail: {
    width: 55,
    height: 70,
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },  
  container: {
    flex: 1,
    flexDirection: "column"
  },
  text: {
    color: '#FBEAEB',
    fontSize: 35,
    fontWeight: "bold",
    textAlign: 'center',
    backgroundColor: "#000000a0"
  }
})

export default styles;