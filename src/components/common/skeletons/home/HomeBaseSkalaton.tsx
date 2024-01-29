import { View, Text } from 'react-native'
import React from 'react'
import SkalatonUserProfile from './SkalatonUserProfile'
import SkalatonProducts from './SkalatonProducts'

const HomeBaseSkalaton = () => {
  return (
    <>
        <SkalatonUserProfile/>
        <SkalatonProducts/>
    </>
  )
}

export default HomeBaseSkalaton