import './global.css'
import React from 'react'
import Navigation from './src/navigation/Navigation'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryCient } from './src/service/queryClient'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryCient}>
        <Navigation />
      </QueryClientProvider>
    </SafeAreaProvider>
  )
}

export default App
