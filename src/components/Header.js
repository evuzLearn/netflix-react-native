import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = props => (
    <View>
        <TouchableWithoutFeedback
            onPress={() => null}
        >
            <Icon 
                name="bars"
                color="white"
                size={25}
            />
        </TouchableWithoutFeedback>
        
    </View>
)

export default Header;