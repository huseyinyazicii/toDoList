import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container_false: {
        backgroundColor: '#7DA453',
        padding: 15,
        margin: 10,
        marginTop: 0,
        borderRadius: 15,
    },
    container_true: {
        backgroundColor: '#37474F',
        padding: 15,
        margin: 10,
        marginTop: 0,
        borderRadius: 15,
    },
    text_false: {
        color: '#ffffff',
        fontSize: 16,
    },
    text_true: {
        color: '#7F7F7F',
        fontSize: 16,
        textDecorationLine: 'line-through',
    },
});

export default styles;