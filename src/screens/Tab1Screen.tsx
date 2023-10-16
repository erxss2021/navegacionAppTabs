import React from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores, styles } from '../themes/appThemes';
export const Tab1Screen = () => {
  return (
    <View style={styles.marginGlobal}>
        <Text style={styles.title}>Iconos</Text>
        <Text>
          <Icon name="airplane-outline" size={30} color={colores.primary} />
          <Icon name="alarm-outline" size={30} color={colores.primary} />
          <Icon name="barbell-outline" size={30} color={colores.primary} />
          <Icon name="basketball" size={30} color={colores.primary} />
          <Icon name="car-sport" size={30} color={colores.primary} />
          <Icon name="fast-food-outline" size={30} color={colores.primary} />
          <Icon name="flower-outline" size={30} color={colores.primary} />
        </Text>
        
    </View>
  )
}
