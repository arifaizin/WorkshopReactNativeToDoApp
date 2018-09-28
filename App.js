//import stuff
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert} from 'react-native';

//create stuff
class App extends React.Component {
  
  //method
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  addTodo= () => {
      var toDoBaru = this.state.text;
      var listToDo = this.state.todo;
      listToDo.push(toDoBaru);
      this.setState({
        todo : listToDo, text:''
      });
  }

  deleteTodo=(t) =>{
      var listToDo = this.state.todo;
      var posisi = listToDo.indexOf(t);
      listToDo.splice(posisi, 1);
      this.setState({todo: listToDo})
  }

  state = {
    text: '',
    todo: []
  }

  createList= () =>{
    return this.state.todo.map(t=>{
      return(
      // <Text key={t}>{t}</Text>
      <TouchableHighlight
      underlayColor='#dddddd'
      onPress={() => this.deleteTodo(t)}>
        <View>
          <View style={styles.row}>
            <Text style={styles.todoText} key={t}>{t}</Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
      )       
    })
  } 
  //render ui
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbarView}>
          <Text style={styles.textTitle}>Catatanku</Text>
        </View>
        <View style={styles.inputcontainer}>
          <TextInput 
            style={styles.input}
            placeholder="masukkan teks disini!"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <TouchableHighlight
            onPress={this.addTodo}
            style={styles.button}
            underlayColor='#dddddd'>
            <Text style={styles.btnText}>Add!</Text>
          </TouchableHighlight>
        </View>                   
        <Text>{this.todo}</Text>
        {this.createList()}
      </View>
    );
  }
}

//style ui
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
   toolbarView:{
    backgroundColor: '#48afdb',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
   textTitle:{
   fontSize: 30,
   color: 'white',
   fontWeight: 'bold'
  },
  inputcontainer: {
    marginTop: 5,
    padding: 10,
    flexDirection: 'row'
  },
  button: {
    height: 36,
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#48afdb',
    justifyContent: 'center',
    borderRadius: 4,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 6,
  },
  input: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48afdb',
    borderRadius: 4,
    color: '#48BBEC'
  },
    row: {
    flexDirection: 'row',
    padding: 12,
    height: 44
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
});

//export stuff
export default App;