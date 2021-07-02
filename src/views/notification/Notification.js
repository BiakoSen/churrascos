import React, { useState } from 'react'
import {
    View,
    ImageBackground,
    Text,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native'
import DatePicker from 'react-native-date-picker'

import styles from '../../styles/ConsStyles'

import Back from '../../static/images/Back.png'

import PushNotification from 'react-native-push-notification'

const Notification = () => {

    const [date, setDate] = useState(new Date())

    const noti = () => {
        PushNotification.localNotification({
            autoCancel: true,
            channelId: 'channel-id',
            bigText:
                'This is local notification demo in React Native app. Only shown, when expanded.',
            subText: 'Local Notification Demo',
            title: 'Local Notification Title',
            message: 'Expand me to see more',
            vibrate: true,
            vibration: 300,
            playSound: true,
            soundName: 'default',
        })
    }

    return (
        <View style={styles.principalContainer}>

            <View style={styles.barRed} />

            <ImageBackground style={styles.secundaryContainer}
                source={Back}>
                <View style={styles.subContainer}>

                    <View style={styles.inputContainer}>
                        <Text style={styles.titleWhite}>Title:</Text>
                        <TextInput style={styles.generalInput}
                            placeholder='Title'
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.titleWhite}>Message:</Text>


                        <TextInput style={styles.bigInput}
                            placeholder='Message'
                            numberOfLines={4}
                            multiline
                            textAlignVertical={'top'}
                        />

                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.titleWhite}>Date:</Text>
                        <DatePicker
                            style={styles.datePicker}
                            date={date}
                            textColor={'#fff'}
                            onDateChange={setDate}
                            minimumDate={new Date()}
                        />
                    </View>

                    <TouchableOpacity style={styles.buttomSolo}
                        onPress={noti}
                    >
                        <Text style={{ color: 'black' }}>Enviar</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>

        </View>
    )
}

export default Notification