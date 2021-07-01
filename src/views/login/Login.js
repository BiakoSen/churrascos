import React, { useState } from 'react'
import {
    ImageBackground,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'

import imgBackground from '../../static/images/Back.png'
import Logo from '../../static/images/Logo.png'

import { http } from '../../service/api'

import styles from '../../styles/ConsStyles'

const Login = (props) => {

    const [userName, setUserName] = useState('')
    const [pass, setPass] = useState('')

    const { navigation } = props

    const goToMain = () => {
        navigation.navigate('Main')
    }

    const goToAdmin = () => {
        navigation.navigate('TabAdmin')
    }

    const goToRegister = () => {
        navigation.navigate('Register')
    }

    const loginRequest = async () => {

        try {

            const dataSent = {
                username: userName,
                password: pass,
            }

            const { data } = await http.post('/users/auth', dataSent)
            console.log('post user login: ', data)

            if (data.success) {
                switch (data.data.fk_perfil) {
                    case 1: {
                        goToMain()
                        break
                    }
                    case 2: {
                        goToAdmin()
                        break
                    }
                }
            }

        } catch (error) {
            throw String(error)
        }

    }

    return (
        <View style={styles.principalContainer}>
            <ImageBackground
                style={styles.secundaryContainer}
                source={imgBackground}
            >

                <View
                    style={{
                        height: '85%',
                        width: '80%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '5%',
                    }}
                >
                    <Image
                        style={styles.logoStyle}
                        source={Logo} />

                    <Text style={styles.titleWhite}>Login</Text>

                    <View style={{
                        height: '70%',
                        width: '100%',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{
                            height: '40%',
                            width: '100%',
                            justifyContent: 'space-between',
                        }}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.titleWhite}>Username</Text>

                                <TextInput style={styles.generalInput}
                                    value={userName}
                                    onChangeText={setUserName}
                                    placeholder='Username' />

                            </View>

                            <View style={styles.inputContainer}>
                                <Text style={styles.titleWhite}>Password</Text>

                                <TextInput style={styles.generalInput}
                                    value={pass}
                                    onChangeText={setPass}
                                    placeholder='Password' />

                            </View>
                        </View>

                        <View style={styles.rowItems}>
                            <TouchableOpacity style={styles.buttomLogin}
                                onPress={goToRegister}
                            >
                                <Text>Sign up</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttomLogin}
                                onPress={loginRequest}
                            >
                                <Text>Sign in</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.buttomSolo}
                            onPress={goToMain}
                        >
                            <Text style={{

                            }}>Enter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login