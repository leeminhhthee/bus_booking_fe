import { View, Text, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { UserCircleIcon } from 'react-native-heroicons/solid'
import Bookings from '../components/home/Bookings'
import { logout } from '../service/requests/auth'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} edges={['top', 'left', 'right']}>
      {/* Thêm dòng này để chỉnh StatusBar */}
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View className="flex-row justify-between items-center px-4 py-2">
        <Text className="font-okra font-bold text-3xl">
          Bus Tickets
        </Text>
        <UserCircleIcon color="red" size={38} onPress={logout} />
      </View>

      <Bookings />
    </SafeAreaView>
  )
}

export default HomeScreen
