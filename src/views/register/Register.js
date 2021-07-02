import React, { useState } from 'react'
import {
    ImageBackground,
    View,
    Text,
    Image,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native'

import { http } from '../../service/api'

import styles from '../../styles/ConsStyles'

import { errorMessage } from '../../utils/constants'

import Back from '../../static/images/Back.png'

const Register = (props) => {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [cPass, setCPass] = useState('')

    const { navigation } = props

    const back = _ => {
        navigation.pop()
    }

    const registerRequest = async () => {
        try {

            if (userName === '' || email === '' || pass === '' || (pass !== cPass)) {
                throw String('you must not leave empty fields')
            }

            const dataSent = {
                username: userName,
                password: pass,
                email: email
            }

            const { data } = await http.post('/users/', dataSent)

            console.log('post create user: ', data)

            if (data.success === true) {
                back()
            }else{
                errorMessage(data.message)
            }

        } catch (error) {
            errorMessage(error)
        }
    }

    return (
        <View style={styles.principalContainer}>
            <ImageBackground
                style={styles.secundaryContainer}
                source={Back}>

                <KeyboardAvoidingView
                    style={{
                        height: '100%',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    behavior='padding'
                >

                    <View style={styles.subContainer}>
                        <Text style={styles.titleWhite}>Register</Text>
                        <View style={{
                            height: '70%',
                            width: '100%',
                            // justifyContent: 'space-between'
                        }}>


                            <View style={styles.inputContainer}>
                                <Text style={styles.titleWhite}>Username</Text>
                                <TextInput
                                    value={userName}
                                    onChangeText={setUserName}
                                    style={styles.generalInput}
                                    placeholder='Username'
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Text style={styles.titleWhite}>Email</Text>
                                <TextInput
                                    value={email}
                                    onChangeText={setEmail}
                                    style={styles.generalInput}
                                    placeholder='Email'
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Text style={styles.titleWhite}>Password</Text>
                                <TextInput
                                    value={pass}
                                    onChangeText={setPass}
                                    style={styles.generalInput}
                                    placeholder='Password'
                                    secureTextEntry
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Text style={styles.titleWhite}>Confirm password</Text>
                                <TextInput
                                    value={cPass}
                                    onChangeText={setCPass}
                                    style={styles.generalInput}
                                    placeholder='Confirm password'
                                    secureTextEntry
                                />
                            </View>

                            <View style={styles.rowItems}>
                                <TouchableOpacity style={styles.buttomLogin}
                                    onPress={back}
                                >
                                    <Text>Back</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.buttomLogin}
                                    onPress={registerRequest}
                                >
                                    <Text>Sign up</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>
                </KeyboardAvoidingView>

            </ImageBackground>
        </View >
    )
}

export default Register