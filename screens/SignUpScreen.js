import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, ScrollView, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { db } from '../config';
import { setDoc, doc  } from 'firebase/firestore';

export default class signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            email: "",
            fullname: "",
            password: "",
            phonenumber: "",
            username:"",
            check_textInputChange: false,
            secureTextEntry: true,
            modalVisible: false,
            modalNotVisible: false
        };
    }
  
    InsertNewUser=()=>{
        var address = this.state.address;
        var email = this.state.email;
        var fullname = this.state.fullname;
        var password = this.state.password;
        var phonenumber = this.state.phonenumber;
        var username = this.state.username;
        var checkemail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);
    
        if (
            (address.length==0) ||
            (email.length==0) ||
            (fullname.length==0) ||
            (password.length==0) || 
            (phonenumber.length==0) ||
            (username.length==0)
        ){
            alert("Required Field Is Missing!!!");
        }else if (!(checkemail).test(email)){
            alert("invalid email!!!");
        }
        else if (password.length<8){
            alert("Minimum 08 characters required!!!");
        }else if (!((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(password))){
            alert("Use atleast 01 special character!!!");
        }else if (((/[ ]/).test(password))){
            alert("Don't include space in password!!!");
        }else{

        setDoc(doc(db, "users", username),{
            address: address,
            email: email,
            fullname: fullname,
            password: password,
            phonenumber: phonenumber,
            username: username,
        })
        .then(() => {
            console.log("data submitted");
            this.props.navigation.navigate("SignInScreen");
        })
        .catch((error) => {
            console.log(error);
        });
        }
    }

    updateSecureTextEntry(){
        this.setState({
          ...this.state,
          secureTextEntry: !this.state.secureTextEntry
        });
    }

render() {
    return (
    <View style={styles.container}>
          <StatusBar backgroundColor='#04555C'/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_footer}>Full Name</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Enter Your Full Name"
                    style={styles.textInput}
                    onChangeText={fullname=>this.setState({fullname})}
                />
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Email</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Enter Your Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onChangeText={email=>this.setState({email})}
                />
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Phone Number</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Enter Your Phone Number"
                    style={styles.textInput}
                    keyboardType="number-pad"
                    onChangeText={phonenumber=>this.setState({phonenumber})}
                />
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Address</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Enter Your Address"
                    style={styles.textInput}
                    onChangeText={address=>this.setState({address})}
                />
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Enter Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={username=>this.setState({username})}
                />
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Enter Your Password"
                    secureTextEntry={this.state.secureTextEntry ? true : false}
                    style={styles.textInput}
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
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {this.InsertNewUser()}}
                >
                <LinearGradient
                    colors={['#04555C', '#03363B']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#04555C',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#04555C'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
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
        flex: Platform.OS === 'ios' ? 3 : 5,
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
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
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
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });