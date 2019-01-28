import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'expo';
import colors from '../../constants/colors';
import layout from '../../constants/layout';

export const getIcon = icon => {
  return (
    <Icon.Ionicons
      size={layout.icon}
      color={colors.secondaryText}
      name={
        Platform.OS === 'ios'
          ? `ios-${icon}`
          : `md-${icon}`
      }
    />
  )
}
