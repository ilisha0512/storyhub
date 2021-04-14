import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import ReadStory from './screens/ReadStory'
import WriteStory from './screens/WriteStory'

export default class App extends React.Component {
  render(){
    return(
      <View style = {styles.container}>
       <AppContainer/>
      </View>
    )
  }
   
}

const TabNavigator = createBottomTabNavigator({
  readStory: {screen: ReadStory},
  writeStory: {screen: WriteStory}
},
{
  defaultNavigationOptions: ({navigation}) =>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName
      if (routeName==="readStory"){
        return(
          <Image
          source = {require("./book.png")}
          style = {{width: 40, height: 40}}
          />
        )
      }
      else if (routeName==="writeStory"){
         return(
          <Image
          source = {require("./writingbook.png")}
          style = {{width: 40, height: 40}}
          />
        )
      }
    }
  })
}
)

const AppContainer = createAppContainer(TabNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
