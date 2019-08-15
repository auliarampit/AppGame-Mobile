import React, { Component } from 'react';
import { 
    Container, 
    Header, 
    Content, 
    Form, 
    Item, 
    Input, 
    Label, 
    Button
} from 'native-base';
import {
    StyleSheet,
    Image,
    Text,
    AsyncStorage,
    Alert
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux';
import { login } from '../Publics/Actions/login'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password : ''
    }
  }

  login = async() => {
    await AsyncStorage.clear()
    const data = {
        email : this.state.email,
        password : this.state.password
    }
    await this.props.dispatch(login(data))
    this.setState({
      email : '',
      password : ''
    })
    if(this.props.login.login === 'Email Tidak Terdaftar') {
      Alert.alert('Email Tidak Terdaftar')
    } else if(this.props.login.login === 'Password Salah') {
      Alert.alert('Password Anda Salah') 
    } else {
      let fullName = ''
      fullName = await AsyncStorage.getItem('fullname')
      Alert.alert('', 'Login Success', [{text : 'Oke', onPress : () => this.props.navigation.navigate('Home')}])
    }
  }

  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          <Image source={require('../Assets/Vector.png')}/>
          <Image style={styles.imageLogin} source={require('../Assets/login.png')} />
          <Text style={styles.loginText}>Login</Text>
          
          <Form style={styles.login}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input value={this.state.email} onChangeText={(email => this.setState({email}))} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input value={this.state.password} onChangeText = {(password) => this.setState({password})} secureTextEntry={true} />
            </Item>
            <Button onPress = {() => this.login()}
            style={styles.buttonSignIn}>
              <Text style={styles.signIn}>
                Sign In
              </Text>
            </Button>
          </Form>
        </Content>
        <TouchableOpacity >
            <Text style={styles.buttonSignUp}>Sign Up</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  login : {
    marginTop : '0%'
  },
  loginText : {
    position : 'absolute',
    width : 198,
    height : 70,
    left : 45,
    top : 71,

    fontSize : 36,
    color : 'white'
  },
  signIn : {
    marginLeft : 125,

    color : 'white'
  },
  buttonSignIn : {
    width : '80%',
    marginLeft : 35,
    borderRadius : 5,
    marginTop : 20,
  },
  buttonSignUp : {
    width: 50,
    height : 30,
    marginLeft : 15,
  },
  imageLogin : {
    position : 'absolute',
    width : 190,
    height : 180,
    left : 165,
    top : 23,
  }
})
const mapStateToProps = (state) => {
  return {
    login : state.login
  }
}

export default connect(mapStateToProps) (withNavigation(Login))