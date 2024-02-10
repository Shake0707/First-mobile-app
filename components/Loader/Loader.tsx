import React from 'react'
import { LoadingBox, LoadingText } from './style'
import { ActivityIndicator } from 'react-native'

export const Loader = () => {
    return (
        <>
            <LoadingBox >
                <ActivityIndicator size="large" />
                <LoadingText>Loading...</LoadingText>
            </LoadingBox>
        </>
    )
}