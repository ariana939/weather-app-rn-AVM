import React, { PropsWithChildren } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const LayoutParaPantallaDelClima = ({children}: PropsWithChildren) => {
  return (
    <SafeAreaView>
      {children}
    </SafeAreaView>
  )
}

export default LayoutParaPantallaDelClima