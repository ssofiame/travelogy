import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  doc,
  where,
  query,
  collection,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config";
import Feather from "react-native-vector-icons/Feather";

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import {useTheme} from 'react-native-paper';
import { MaterialIcons } from "@expo/vector-icons";

export default class EditProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      phonenumber: "",
      address: "",
      password: "",
      dbusername: "",
      dbemail: "",
      dbphonenumber: "",
      dbaddress: "",
      dbpassword: "",
      check_textInputChange: false,
      secureTextEntry: true,
      confirmSecureTextEntry: true,
    };
  }

  // mengambil data user
  ReadData=()=>{
    var username = this.state.username;
    var password = this.state.password;

    if ((username.length==0) || (password.length==0)){
        alert("Required Field Is Missing!!!");
    }else {
        getDocs(
            query(collection(db, "users"), where("username", "==", username))
        ).then ((docSnap) => {
            let users = [];
            docSnap.forEach((doc) => {
                users.push({ ...doc.data(), id: doc.id});
            });
            this.setState({
                dbpassword: users[0].password,
                dbusername: users[0].username,
            });
            console.log(this.state.dbpassword);
            console.log(this.state.dbusername);
            this.UpdateData();
        });
    }
};

  // update data user
  UpdateData() { 
    const { username, email, phonenumber,address } = this.state;
    updateDoc (doc (db, "users", this.state.dbusername), { 
      username: username, 
      email: email,
      phonenumber: phonenumber,
      address: address,
    }).then(() => {
      console.log('data submitted');
     }).catch((error) => {
       console.log(error);
      });
  }
  
  setModalVisible = (visible) => {
    this.setState ({modalVisible: visible});
  };
  updateSecureTextEntry() {
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry,
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <Animated.View style={{margin: 20,}}>
        <View style={styles.action}>
          <Ionicons name="person-outline" size={20} />
          <TextInput
            placeholder="Username"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[styles.textInput]}
            onChangeText={(username) => this.setState({ username })}
          >
            {this.state.username}
          </TextInput>
        </View>
        <View style={styles.action}>
          <Ionicons name="md-mail-outline"  size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            style={[styles.textInput]}
            onChangeText={(email) => this.setState({ email })}
          >
            {this.state.email}
          </TextInput>
        </View>
        <View style={styles.action}>
          <Ionicons name="ios-call-outline"  size={20} />
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[styles.textInput]}
            onChangeText={(phonenumber) => this.setState({ phonenumber })}
          >
            {this.state.phonenumber}
          </TextInput>
        </View>
        <View style={styles.action}>
          <Ionicons name="ios-location-outline"  size={20} />
          <TextInput
            placeholder="Address"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[styles.textInput]}
            onChangeText={(address) => this.setState({ address })}
          >
            {this.state.address}
          </TextInput>
        </View>
        <View style={styles.action}>
          <Ionicons name="key-outline"  size={20} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#666666"
            autoCorrect={false}
            secureTextEntry={this.state.secureTextEntry ? true : false}
            style={[styles.textInput]}
            onChangeText={(password) => this.setState({ password })}
          />
          <TouchableOpacity 
            onPress={this.updateSecureTextEntry.bind(this)}>
            {this.state.secureTextEntry ?
              <Feather
                style={styles.eye}
                name="eye-off"
                color="grey"
                size={20}
              />
             : 
              <Feather style={styles.eye} 
              name="eye" 
              color="bgrey" 
              size={20} />
            }
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={() => {this.ReadData();}}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#04555C',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});