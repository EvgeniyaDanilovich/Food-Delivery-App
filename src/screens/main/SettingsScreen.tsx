import React, {useContext} from 'react';
import {Text, Platform, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useWindowDimensions} from 'react-native';
import {ThemeContext} from '../../utilities/providers/themeContext';

export const SettingsScreen: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const windowWidth = useWindowDimensions().width;

  const isSmallScreen = windowWidth < 768;
  const textFontSize = isSmallScreen ? 16 : 22;
  const iconSize = isSmallScreen ? 24 : 30;

  if (!themeContext) {
    return null;
  }

  const {theme, toggleTheme} = themeContext;

  return (
    <TouchableOpacity style={styles.container} onPress={toggleTheme}>
      <Text style={{color: theme.colors.text, fontSize: textFontSize}}>
        {theme.dark ? 'Switch to day theme' : 'Switch to night theme'}
      </Text>
      <Icon
        name={theme.dark ? 'sun' : 'moon'}
        color={theme.colors.primary}
        size={iconSize}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'Sen',
  },
});
