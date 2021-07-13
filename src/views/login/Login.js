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
import { errorMessage } from '../../utils/constants'

import styles from '../../styles/ConsStyles'

const Login = (props) => {

    const [userName, setUserName] = useState('')
    const [pass, setPass] = useState('')

    const [dataUser, setDataUser] = useState('')

    const { navigation } = props

    const clear = () => {
        setUserName('')
        setPass('')
    }

    const goToMain = () => {
        navigation.navigate('Main', {dataUser: dataUser})
        clear()
    }

    const goToAdmin = () => {
        navigation.navigate('TabAdmin')
        clear()
    }

    const goToRegister = () => {
        navigation.navigate('Register')
        clear()
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
                        setDataUser(data.data)
                        goToMain()
                        break
                    }
                    case 2: {
                        goToAdmin()
                        break
                    }
                }
            }else{
                errorMessage(data.message)
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
                                    placeholder='Password' 
                                    secureTextEntry
                                    />

                            </View>
                        </View>

                        <View style={styles.rowItems}>
                            <TouchableOpacity style={styles.buttomLogin}
                                onPress={goToRegister}
                            >
                                <Text>Sign up</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttomLogin}
                                onPress={goToAdmin}
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