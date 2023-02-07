import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { db } from '../config';
import { getDocs, query, collection, where  } from 'firebase/firestore';

export default class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "", 
            password: "",
            dbusername: "",
            dbpassword: "",
            check_textInputChange: false,
            secureTextEntry: true,
            modalVisible: false,
            modalNotVisible: false
        };
    }
  
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
                this.validasiDB();
            });
        }
    };

    validasiDB = () => {
        if (
            this.state.username === this.state.dbusername &&
            this.state.password === this.state.dbpassword
        ){
            Alert.alert("Welcome!");
            console.log("Logged in successfully");
            this.props.navigation.navigate("DrawerScreen");
        }else {
            Alert.alert("Login failed");
        }
    };

    setModalVisible = (visible) => {
        this.setState ({modalVisible: visible});
    };
  
    updateSecureTextEntry(){
        this.setState({
        ...this.state,
        secureTextEntry: !this.state.secureTextEntry
        });
    };
  
  render() {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#04555C'/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer]}
        >
            <Text style={[styles.text_footer]}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    placeholderTextColor="#666"
                    style={[styles.textInput]}
                    autoCapitalize="none"
                    onChangeText={username=>this.setState({username})}
                />
            </View>
            
            <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666"
                    secureTextEntry={this.state.secureTextEntry ? true : false}
                    style={[styles.textInput]}
                    autoCapitalize="none"
                    onChangeText={password=>this.setState({password})}
                />
                <TouchableOpacity
                    onPress={this.updateSecureTextEntry.bind(this)}
                >
                    {this.state.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            

            <TouchableOpacity>
                <Text style={{color: '#04555C', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>{
                      this.ReadData()
                    }}
                >
                <LinearGradient
                    colors={['#04555C', '#03363B']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#04555C',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#04555C'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#04555C'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});