import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import List from './components/List';
import Slide from './components/Slider';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <View style={[{ flex: 1 }, styles.container]}>
                <Header />
                <Slide />
                <List />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    }
})

export default App;