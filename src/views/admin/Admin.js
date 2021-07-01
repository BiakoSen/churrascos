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
import { color } from 'react-native-reanimated'

const Admin = () => {

    const [date, setDate] = useState(new Date())

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

                    <TouchableOpacity style={styles.buttomSolo}>
                        <Text style={{ color: 'black' }}>Enviar</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>

        </View>
    )
}

export default Admin