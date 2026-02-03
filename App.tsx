import {useAudioPlayer, useAudioPlayerStatus} from 'expo-audio';
import React, {FC, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Sound: FC = () => {
    const player1 = useAudioPlayer(require('./assets/sounds/beltHandle1.mp3'), {downloadFirst: true});
    const player2 = useAudioPlayer(require('./assets/sounds/bookFlip2.mp3'), {downloadFirst: true});
    const player3 = useAudioPlayer(require('./assets/sounds/impactBell_heavy_004.mp3'), {downloadFirst: true});
    const player4 = useAudioPlayer(require('./assets/sounds/impactGeneric_light_001.mp3'), {downloadFirst: true});
    const player5 = useAudioPlayer(require('./assets/sounds/impactGeneric_light_002.mp3'), {downloadFirst: true});
    const player6 = useAudioPlayer(require('./assets/sounds/metalClick.mp3'), {downloadFirst: true});
    const player7 = useAudioPlayer(require('./assets/sounds/mixkit-fantasy-bells-582.mp3'), {downloadFirst: true});

    const status1 = useAudioPlayerStatus(player1);
    const status2 = useAudioPlayerStatus(player2);
    const status3 = useAudioPlayerStatus(player3);
    const status4 = useAudioPlayerStatus(player4);
    const status5 = useAudioPlayerStatus(player5);
    const status6 = useAudioPlayerStatus(player6);
    const status7 = useAudioPlayerStatus(player7);

    const onPressHandler1 = useCallback(async () => {
        player1.volume = 1.0;

        await player1.seekTo(0);
        player1.play();
    }, [player1]);

    const onPressHandler2 = useCallback(async () => {
        player2.volume = 1.0;

        await player2.seekTo(0);
        player2.play();
    }, [player2]);

    const onPressHandler3 = useCallback(async () => {
        player3.volume = 1.0;

        await player3.seekTo(0);
        player3.play();
    }, [player3]);

    const onPressHandler4 = useCallback(async () => {
        player4.volume = 1.0;

        await player4.seekTo(0);
        player4.play();
    }, [player4]);

    const onPressHandler5 = useCallback(async () => {
        player5.volume = 1.0;

        await player5.seekTo(0);
        player5.play();
    }, [player5]);

    const onPressHandler6 = useCallback(async () => {
        player6.volume = 1.0;

        await player6.seekTo(0);
        player6.play();
    }, [player6]);

    const onPressHandler7 = useCallback(async () => {
        player7.volume = 1.0;

        await player7.seekTo(0);
        player7.play();
    }, [player7]);

    if (
        !status1.isLoaded || !status2.isLoaded || !status3.isLoaded || !status4.isLoaded || !status5.isLoaded || !status6.isLoaded || !status7.isLoaded
    ) {
        return (
            <View style={styles.root}>
                <Text style={styles.loading}>Waiting for loaded status</Text>
            </View>
        );
    }

    return (
        <View style={styles.root}>
            <TouchableOpacity onPress={onPressHandler1}>
                <Text style={styles.button}>S 1</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressHandler2}>
                <Text style={styles.button}>S 2</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressHandler3}>
                <Text style={styles.button}>S 3</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressHandler4}>
                <Text style={styles.button}>S 4</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressHandler5}>
                <Text style={styles.button}>S 5</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressHandler6}>
                <Text style={styles.button}>S 6</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressHandler7}>
                <Text style={styles.button}>S 7</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#333',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
    },

    loading: {
        backgroundColor: 'red',
        padding: 15,
        margin: 5,
        textAlign: 'center',
        fontSize: 32,
        borderRadius: 7,
        color: '#FFF',
    },

    button: {
        backgroundColor: '#EEE',
        padding: 15,
        margin: 5,
        textAlign: 'center',
        fontSize: 20,
        borderRadius: 7,
    },
});

export default Sound;
