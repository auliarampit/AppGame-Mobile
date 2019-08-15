import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    AsyncStorage,
    Alert
} from 'react-native'
import {
    Thumbnail, Button,
} from 'native-base'

import {
    withNavigation, NavigationEvents
} from 'react-navigation'

import Sound from 'react-native-sound'
import { score } from '../Publics/Actions/score';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token : '',
            combo : 0,
            isNow : 0,
            pattern : [2,3,2,4,],
            scoree : 0,
            button : 2,
            hasil : 0,
            image : '',
            score : 0,
            idUser : ''

        }
    }


    onButton2Press = async() => {
        if(this.state.combo === 0) {
            // alert('apam')
        }
        const requireAudio = require('../Assets/test.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
        if(this.state.pattern[this.state.isNow]=== 2) {
            if(this.state.pattern.length === this.state.isNow + 1) {
                await this.setState({
                    combo : this.state.combo -1,
                    isNow : 0
                })
                next.play(() => next.release())
            }
            await this.setState({
                scoree : this.state.scoree + 70,
                isNow : this.state.isNow + 1
            })
        } else {
           Alert.alert('s','You Lose',[{text: 'Ok', onPress : ()=> this.pactScore()}])
            await this.setState({
                scoree : 0,
                isNow : 0,
                combo : 0,
                hasil : 0

            })
        }
        await this.setState({
            button : this.state.pattern[this.state.isNow]
        })
      }

      onButton3Press = async() => {
          if(this.state.combo === 0) {
            //   alert('apam')
          }
        const requireAudio = require('../Assets/kick2.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
        if(this.state.pattern[this.state.isNow] === 3) {
            if(this.state.pattern.length === this.state.isNow +1) {
                await this.setState({
                    combo : this.state.combo +1,
                    isNow : 0
                })
                next.play(() => next.release())
            }
            await this.setState({
                scoree : this.state.scoree + 40,
                isNow : this.state.isNow + 1
            })
        } else {
            Alert.alert(`${this.state.scoree}`,'You Lose',[{text: 'Ok', onPress : ()=> this.pactScore()}])
            await this.setState({
                scoree : 0,
                isNow : 0,
                combo : 0,
                hasil : 0
            })
        }
        await this.setState({
            button : this.state.pattern[this.state.isNow]
        })
      }

      onButton4Press = async() => {
        if(this.state.combo === 0) {
            // alert('apam')
        }
        const requireAudio = require('../Assets/kick.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
        if(this.state.pattern[this.state.isNow]=== 4) {
            if(this.state.pattern.length === this.state.isNow + 1) {
                await this.setState({
                    combo : this.state.combo +1,
                    isNow : 0
                })
                next.play(() => next.release())
            }
            await this.setState({
                scoree : this.state.scoree + 40,
                isNow : this.state.isNow + 1
            })
        } else {
            Alert.alert('s','You Lose',[{text: 'Ok', onPress : ()=> this.pactScore()}])
            await this.setState({
                scoree : 0,
                isNow : 0,
                combo : 0,
                hasil : 0

            })
        }
        await this.setState({
            button : this.state.pattern[this.state.isNow]
        })
      }
    

    // componentDidUpdate() {
    //     this.nama()
    // }

    nama = async() => {
        this.setState({
            token : await AsyncStorage.getItem('token'),
            image : await AsyncStorage.getItem('image'),
            idUser : await AsyncStorage.getItem('idUser'),
            score : await AsyncStorage.getItem('score')
        })
    }
    pactScore = async() => {
        if(this.state.score < this.state.scoree) {
            await this.props.dispatch(score(Number(this.state.idUser), this.state.scoree))
        }
    }
    render() {
        return (
            <>
            <NavigationEvents onWillFocus = {this.nama} />
            <View style={{flex: 1}}>
            <View style={styles.header}>
                {this.state.image === null ?
                   
                    <Button transparent
                    style={{zIndex: 1, width: 50, height: 50,        marginLeft: 15,
                    marginTop: 4}}
                    onPress = {this.props.navigation.openDrawer}
                    >
                        <Image 
                            style={styles.image} 
                            source={{uri : 'http://www.macedonrangeshalls.com.au/wp-content/uploads/2017/10/image-not-found.png'}} 
                        />
                    </Button> 
                    :
                    <Button transparent
                    style={{zIndex: 1, width: 50, height: 50,        marginLeft: 15,
                    marginTop: 4}}
                    onPress = {this.props.navigation.openDrawer}
                    >
                        <Image 
                            style={styles.image} 
                            source={{uri : this.state.image}} 
                        />
                    </Button>}

                {this.state.token ? 
                    <Button transparent 
                    onPress = {() => {AsyncStorage.clear(); this.props.navigation.navigate('Login')}}
                    style={styles.login}>
                        <Text style={styles.loginText}>Logout</Text>
                    </Button>  
                    : 
                    <Button transparent 
                    onPress = {() => this.props.navigation.navigate('Login')}
                    style={styles.login}>
                        <Text style={styles.loginText}>Login</Text>
                    </Button>
                }
                
            </View>
            <View style={styles.home}>
                <Text>
                    Score: {this.state.scoree}
                </Text>
                <Text style={styles.combo}>
                    Combo Hist:{this.state.combo}
                </Text>

                <Image style={styles.image2} source={require('../Assets/db809-photo.png')} />

                <Text style={styles.shadow}>
                    Shadow Of Sorrow
                </Text>

                <Text style={styles.button1}>
                    <TouchableOpacity 
                        activeOpacity = {0.01}
                        onPress = { () => this.onButtonPress.bind()}
                        style={styles.subButton1} />
                </Text>
                <Text 
                    activeOpacity = {0.01}
                    onPress = {this.onButton2Press.bind(this)}
                    style={styles.button2} >
                        <TouchableOpacity 
                            activeOpacity = {0.01}
                            onPress = {this.onButton2Press.bind(this)}
                            style={styles.subButton2} 
                        />
                </Text>

                <Text 
                    activeOpacity = {0.01}
                    onPress = {this.onButton3Press.bind(this)}
                    style={styles.button3} >
                        <TouchableOpacity 
                            activeOpacity = {0.01}
                            onPress = {this.onButton3Press.bind(this)}
                            style={styles.subButton3} 
                        />
                </Text>

                <Text 
                    activeOpacity = {0.1}
                    onPress = {this.onButton4Press.bind(this)} 
                    style={styles.button4}>
                        <TouchableOpacity 
                            activeOpacity = {0.1}
                            onPress = {this.onButton4Press.bind(this)}
                            style={styles.subButton4} 
                        />
                </Text>
                <Image 
                    style={styles.imageBawah}
                    source={require('../Assets/undraw_compose_music_ovo2.png')} />
            </View>
            </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    header : {
        flex: 1,
        // position: 'absolute',
        width: '100%',
        height: 60,
        left: 0,
        top: 2,

        backgroundColor: '#FFFFFF',
        elevation: 6,
    },
    image : {
        height : 50,
        width : 50,
        borderRadius: 50,
    },
    home : {
        backgroundColor: '#FFFFFF',
        flex: 9
    },
    combo : {
        position : 'absolute',
        width : 261,
        height : 37,
        left : 135,
        top : 70,

        fontFamily : 'Open Sans',
        fontStyle : 'normal',
        fontWeight : "600",
        fontSize: 15,
        lineHeight : 20,

        // color : '#000000'
    },
    image2 : {
        position : 'absolute',
        width : 280,
        height : 60,
        left : 35,
        top : 95,

        // backgroundColor : URL('db809-photo.jpg')
    },
    shadow : {
        position : 'absolute',
        width : 261,
        height : 32,
        left : 120,
        top : 150,

        fontFamily : 'Open Sans',
        fontStyle : 'normal',
        fontWeight : "600",
        fontSize: 15,
        lineHeight : 20,

        // color : '#000000'
    },
    button1 : {
        position : 'absolute',
        width : 80,
        height : 80,
        left : 20,
        top : 310,
        borderRadius : 50,
        textAlign : 'center',
        textAlignVertical : 'center',

        backgroundColor : '#EECECE',
        zIndex : 10
    },
    subButton1 : {
        width : 30,
        height : 30,
        borderRadius : 50,
        top : 20,

        backgroundColor : '#E3A6AE',
        elevation : 5
    },
    button2 : {
        position : 'absolute',
        width : 70,
        height : 70,
        left : 90,
        top : 227,
        borderRadius : 50,
        textAlign : 'center',
        textAlignVertical : 'center',

        backgroundColor : '#F7F7F7',
        elevation : 5
    },
    subButton2 : {
        width : 30,
        height : 30,
        borderRadius : 50,
        top : 20,

        backgroundColor : '#B7C8CB',
        elevation : 5
    },
    button3 : {
        position : 'absolute',
        width : 70,
        height : 70,
        left : 193,
        top : 228,
        borderRadius : 50,
        textAlignVertical : 'center',
        textAlign : 'center',

        backgroundColor : '#F7F7F7',
        elevation : 5
    },
    subButton3 : {
        width : 30,
        height : 30,
        borderRadius : 50,
        top : 20,

        backgroundColor : '#B7C8CB',
        elevation : 5
    },
    button4 : {
        position : 'absolute',
        width : 80,
        height : 80,
        left : 250,
        top : 310,
        borderRadius : 50,
        textAlign : 'center',
        textAlignVertical : 'center',

        backgroundColor : '#EECECE',
    },
    subButton4 : {
        width : 30,
        height : 30,
        borderRadius : 50,
        top : 20,

        backgroundColor : '#E3A6AE',
        elevation : 5
    },
    imageBawah : {
        height : 150,
        width : 150,
        position : 'absolute',
        bottom : 0,
        left : 17

    },
    login : {
        position : 'absolute',
        right : 20,
        top : 5
    },
    loginText : {
        fontSize : 17,
        fontWeight : '600'
    }

})

export default withNavigation(Home)
