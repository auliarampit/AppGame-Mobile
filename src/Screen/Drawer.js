import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    AsyncStorage
} from 'react-native'
import {
    withNavigation
} from 'react-navigation'
import { Button } from 'native-base';

class Drawer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName : '',
            alamat : '',
        }
    }
    componentDidUpdate() {
        this.profile()
    }
    profile = async() => {
        this.setState({
            image : await AsyncStorage.getItem('image'),
            fullName : await AsyncStorage.getItem('fullName')
        })
    }
    render() {
        return(
            <>
            <View style={{flex : 1, backgroundColor : 'blue'}}>
                {this.state.image === null ?
                <Image style={styles.image} source={{uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJftYqJsvhphX6OOjKMjbwllPKR70rAjXcpsP3tQ8XM7-tqRm4'}}  />
                : 
                <Image style={styles.image} source={{uri : this.state.image}}  />
                 }
                    
                <Text style={styles.nama}> {this.state.fullName} </Text>

            </View>
            
            <View style={{flex : 1.5}}>
                <Button transparent onPress = {() => this.props.navigation.navigate('Leaderboard')}>
                    <Image style={{
                        position: 'absolute',
                        width: 35,
                        height: 35,
                        left: 23,
                    }} 
                    source={require('../Assets/crown.png')} />
                <Text style={{
                    position: 'absolute',
                    width: 184,
                    height: 33,
                    left: 73,
                    top: 10,
                    
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: 18,
                    lineHeight: 25,
                }}>Leaderboards</Text>
                </Button>
            </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    image : {
        position : 'absolute',
        width : 100,
        height : 100,
        left : 60,
        top : 65,
        borderRadius : 50,
    },
    nama : {
        position : 'absolute',
        width : 120,
        height : 40,
        left : 55,
        top : 184,
        // backgroundColor:'gray',

        fontStyle : 'normal',
        fontWeight : '600',
        fontSize : 18,
        lineHeight : 25,

        color : '#000000',
        textAlign : "center"
    },
    status : {
        position: 'absolute',
        height : 45,
        width : 120,
        left : 55,
        top : 215,

        fontSize : 13,
        fontWeight : '600',
        fontStyle : 'normal',
        lineHeight : 18,
        textAlign : "center",
    },
    alamat : {
        position: 'absolute',
        height : 45,
        width : 120,
        left : 55,
        top : 250,

        fontSize : 13,
        fontWeight : '600',
        fontStyle : 'normal',
        lineHeight : 18,
        textAlign : "center",
    },
})

export default withNavigation(Drawer)