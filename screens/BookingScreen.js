import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Button, 
    Image,
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Pressable
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { db } from '../config';
import { setDoc, doc  } from 'firebase/firestore';
import Animated from 'react-native-reanimated';

export default class signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          idbooking: "",
          placename: "",
          username: "",
          date: "",
          check_textInputChange: false,
          secureTextEntry: true,
          modalVisible: false,
          modalNotVisible: false
        };
    }
  
    InsertBooking=()=>{
        var idbooking = this.state.idbooking;
        var placename = this.state.placename;
        var username = this.state.username;
        var date = this.state.date;
    
        if (
          (idbooking.length==0) ||
          (placename.length==0) ||
          (username.length==0) ||
          (date.length==0)
        ){
            alert("Required Field Is Missing!!!");
        }else{

        setDoc(doc(db, "booking", idbooking),{
          idbooking: idbooking,
          placename: placename,
          username: username,
          date: date,
        })
        .then(() => {
            console.log("data submitted");
            this.props.navigation.navigate("BookmarkScreen");
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
      <Animated.View style={{margin: 20,}}>
            <ScrollView>

            <Text style={[styles.text]}>ID Booking</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="ID Booking (username + booking number)"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={idbooking=>this.setState({idbooking})}
                />
            </View>

            <Text style={[styles.text, {
                marginTop: 35
            }]}>Place Name</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Enter Place Name"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={placename=>this.setState({placename})}
                />
            </View>

            <Text style={[styles.text, {
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

            <Text style={[styles.text, {
                marginTop: 35
            }]}>Date </Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Enter Date (yyyy-mm-dd)"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={date=>this.setState({date})}
                />
            </View>

            <TouchableOpacity style={styles.commandButton} onPress={() => {this.InsertBooking();}}>
              <Text style={styles.panelButtonTitle}>Submit</Text>
            </TouchableOpacity>
            </ScrollView>
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
    text: {
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
        paddingLeft: 10,
        color: '#05375a',
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#04555C',
      alignItems: 'center',
      marginTop: 40,
    },
  });