import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    AsyncStorage
} from 'react-native'

import LeaderBoard from 'react-native-leaderboard'
import { Button, Icon } from 'native-base';
import {getLeaderboard} from '../Publics/Actions/leaderboard'
import {connect} from 'react-redux'

class Leaderboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score : '',
            fullName : '',
            image : '',
            leaderboard : []
        }
    }

    // componentDidUpdate = () => {
    //     this.scoree()
    // }

    scoree = async() => {
        this.setState({
            score : await AsyncStorage.getItem('score'),
            fullName : await AsyncStorage.getItem('fullName'),
            image : await AsyncStorage.getItem('image')
        })
        
    }

    componentDidMount = async() => {   
        this.scoree()     
        await this.props.dispatch(getLeaderboard())
        console.log(this.props.leaderboard);
        this.setState({
            leaderboard : this.props.leaderboard
        })
    }

  render() {
// console.log(this.state.image);

    return (
        <>
        <View style={styles.header}>
            <Button transparent style={{width: 40}} >
                <Icon name ='previous'></Icon>
            </Button>
            <Text style={{marginTop: -30, fontSize:18, marginLeft: 50}}>Leaderboard</Text>
        </View>
        <View style={{flex: 9}}>
            <View style={styles.contents}>
                <View style={styles.viewRank}>
                    <Text style={styles.rank}>Rank</Text>
                    <Text style={styles.angkaRank}>10</Text>
                </View>
                <View style={{flex: 1,}}>
                    <Image style ={{width: 60, height: 60, borderRadius: 50, marginTop: 35, marginLeft: 20}}
                    source={{uri: this.state.image}} />
                </View>
                <View style={{flex: 1,}}>
                    <Text style={{textAlign: 'center', marginTop: 50, color: 'white'}}>
                        Score
                    </Text>
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 15, fontWeight: '600'}}>
                    {this.state.score}
                    </Text>
                </View>
            </View>
            <View style={{marginTop:10}}>
            <LeaderBoard
                data = {this.state.leaderboard.leaderboardList}
               sortBy='score' 
               labelBy='fullName' />
            </View>
        </View>
        </>
    )
  }
}

const styles = StyleSheet.create({
    header : {
        flex : 1,
        elevation : 6,
        backgroundColor : '#FFFFFF'
    },
    contents : {
        height : 132,
        width : 300,
        marginLeft : 31,
        marginTop : 20,
        backgroundColor : '#FBCC38',
        borderRadius : 10,
        flexDirection : "row"
    },
    viewRank : {
        flex : 1
    },
    rank : {
        color : 'white',
        textAlign : 'center',
        fontSize : 15,
        fontWeight : '600',
        marginTop : 50
    },
    angkaRank : {
        color : 'white',
        textAlign : 'center',
        fontSize : 15,
        fontWeight : '600',
    }
})

const mapStateToProps = (state) => {
    return {
        leaderboard : state.leaderboard
    }
}
export default connect(mapStateToProps)(Leaderboard)