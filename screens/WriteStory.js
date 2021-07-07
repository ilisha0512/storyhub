import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Header, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import firebase from 'firebase'
import db from '../Config'

export default class WriteScreen extends React.Component {

  constructor(){
    super()
    this.state = {
      title: "",
      author: "",
      story: "",
    }
  }

  submitStory = ()=>{
      db.collection("stories").add({
        title: this.state.title,
        author: this.state.author,
        story: this.state.story
      })
      ToastAndroid.show("Your story has been submitted!", ToastAndroid.SHORT)
  }

  render(){
    return(
      <KeyboardAvoidingView style = {{flex: 1}} behaviour = "padding" enabled>
        <TextInput
        placeholder = "Title"
        onChangeText = {(text)=>{
          this.setState({
             title: text
          })
        }}
        />
        <TextInput
        placeholder = "Author"
        onChangeText = {(text)=>{
          this.setState({
            author: text
         })
        }}
        />
        <TextInput
        placeholder = "Write Your Story"
        onChangeText = {(text)=>{
          this.setState({
            story: text
         })
        }}
        />
        <TouchableOpacity
         style = {styles.submitButton}
         onPress = {this.submitStory} >
         <Text>
           Submit  
         </Text> 

        </TouchableOpacity>
        
      </KeyboardAvoidingView>
    )
  }
   
}

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
