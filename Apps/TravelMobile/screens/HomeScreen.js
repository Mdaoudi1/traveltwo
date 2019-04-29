import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet, TextInput, toFixed, ActivityIndicator, ImageBackground } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state =  {
            bal:1.00,
            newBal:0,
            inputValue:"",
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount (){
        return fetch('http://www.apilayer.net/api/live?access_key=98abf75cf880a807a45432cb6c162c51')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.quotes,
                })
            })
 
            .catch((error) => {
                console.log(error)
            });
    }
 
 


    _handleTextChange = bal => {
        this.setState({ bal });
    };
    changeText = () => {
        this.setState({
            newText:this.state.bal,
        })
    }
    
    usdToEuro = () => {
        this.setState({ 
            newBal: this.state.bal*this.state.dataSource.USDEUR,
        })
    }
    usdToPound = () => {
        this.setState({ 
            newBal: this.state.bal*this.state.dataSource.USDGBP,
        })
    }
    usdToRupee = () => {
        this.setState({ 
            newBal: this.state.bal*this.state.dataSource.USDINR,
        })
    }
    usdToAus = () => {
        this.setState({ 
            newBal: this.state.bal*this.state.dataSource.USDAUD,
        })
    }
    usdToCan = () => {
        this.setState({ 
            newBal: this.state.bal*this.state.dataSource.USDCAD,
        })
    }
    usdToSwiss = () => {
        this.setState({ 
            newBal: this.state.bal*this.state.dataSource.USDCHF,
        })
    }
    usdToYuan = () => {
        this.setState({ 
            newBal: this.state.bal*this.state.dataSource.USDCNY,
        })
    }
    usdToYen = () => {
        this.setState({ 
            newBal: this.state.bal*this.state.dataSource.USDJPY,
        })
    }

    render() {
        if(this.state.isLoading) {
            return (
                <View style = {styles.container}>
                    <ActivityIndicator/>
                </View>
            )
        } else{
            return (
            <View style={styles.container}>
                <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/c7/ed/87/c7ed870fb20f8f409ac242b51c8bc6e7.jpg'}} style={styles.imgBackground}>
                <TextInput
                    value={this.state.bal}
                    onChangeText={this._handleTextChange}
                    style={{ width: 200, height: 44, padding: 8, borderColor:'gray', borderWidth: 1, backgroundColor: 'white' }}
                />
                
                <TouchableHighlight
                    onPress={this.changeText}
                >
                    <Text>
                    Enter
                    </Text>
                </TouchableHighlight>
                <Text style={styles.paragraph}>
                    {this.state.newText}
                </Text>
                
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.usdToEuro}
                    >
                        <Text style={styles.buttonText}>
                            USD to EUR
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.usdToSwiss}
                    >
                        <Text style={styles.buttonText}>
                            USD to CHF
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.usdToPound}
                    >
                        <Text style={styles.buttonText}>
                            USD to GBP
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.usdToYen}
                    >
                        <Text style={styles.buttonText}>
                            USD to YEN
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.usdToRupee}
                    >
                        <Text style={styles.buttonText}>
                            USD to INR
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.usdToYuan}
                    >
                        <Text style={styles.buttonText}>
                            USD to CNY
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.usdToAus}
                    >
                        <Text style={styles.buttonText}>
                            USD to AUD
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.usdToCan}
                    >
                        <Text style={styles.buttonText}>
                            USD to CAD
                        </Text>
                    </TouchableHighlight>
                </View>
                <Text style={styles.paragraph}>
                    My New Balance
                </Text>

                <Text style={styles.printBalance}>
                    ${this.state.newBal.toFixed(2)}
                </Text>
                </ImageBackground>
            </View>
            );    
   }
}
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-around'
    },
    buttonContainer: {
        flexDirection: 'row',
        
    },
    yikes: {
        color: 'red',
        fontSize: 30,
        textAlign: 'center',
        
        textAlign: 'justify',
    },
    paragraph: {
        borderColor:'gray', 
        borderWidth: 1, 
        backgroundColor: 'white',
        fontSize: 30,
    },
    buttonText: {
        
    },
    button: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 150,
        borderColor: 'blue',
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    imgBackground: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        flex: 1,
    },
    printBalance: {
        height: 56, 
        padding: 8,
        borderColor:'gray', 
        borderWidth: 1, 
        backgroundColor: 'white',
        color: 'red',
        fontSize: 30,
        textAlign: 'center',
        textAlign: 'justify',
    }
});