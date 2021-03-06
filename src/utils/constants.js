import { Platform, Dimensions, StatusBar } from 'react-native'

import { showMessage } from 'react-native-flash-message'

const { height, width } = Dimensions.get("window")
const standardLength = width > height ? width : height
const offset =
    width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight

const deviceHeight =
    Platform.OS === "android"
        ? standardLength - offset
        : standardLength

export const RFValue = (fontSize = 0, standardScreenHeight = 680) => {
    const heightPercent = (fontSize * deviceHeight) / standardScreenHeight
    return Math.round(heightPercent)
}

export const errorMessage = (message='Error') =>{
    showMessage({
        message,
        type: 'danger'
    })
}

export const successMessage = (message='Good') =>{
    showMessage({
        message,
        type: 'success'
    })
}
