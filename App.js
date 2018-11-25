import React from 'react';
import { StyleSheet, Text, View, FlatList, TabBarIOS } from 'react-native';
import Card from './components/Card'
import Top from './components/Top'

export default class App extends React.Component {
  render() {
    return (
      <View style={style.container}>
      <Text style={style.role}>Inspector</Text>
      <FlatList
        style={style.list}
        data={[
          {key: 'Travis'},
          {key: 'Molly'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Card name={item.key}></Card>}
      />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  list: {
      paddingTop: 40,
      flex: 0,
      width: '100%',
      textAlign: 'center',
      marginBottom: 50,
      backgroundColor: 'white'
  },
  role: {
    paddingTop: 50,
    fontSize: 44,
    color: "white",
    backgroundColor: "black",
    width: '100%',
    textAlign: 'center',
  }
});
