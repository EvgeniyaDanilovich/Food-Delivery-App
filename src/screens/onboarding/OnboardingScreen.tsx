import React, {useState, useRef, useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {screenNames, RootStackParamList} from '../../navigation/types';
import {ThemeContext} from '../../utilities/providers/themeContext';
import {PaginationDot} from './components/PaginationDot';
import {BigButton} from '../../components/BigButton';
import {onboardingData, OnboardingItem} from './onboardingData';

export const OnboardingScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const themeContext = useContext(ThemeContext);
  const {width} = useWindowDimensions();

  if (!themeContext) {
    throw new Error('ThemeContext not provided.');
  }

  const {theme} = themeContext;

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.navigate(screenNames.launch);
    }
  };

  const handleSkip = () => {
    navigation.navigate(screenNames.launch);
  };

  const renderItem = ({item}: {item: OnboardingItem}) => (
    <View style={[styles.slide, {width}]}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={[styles.title, {color: theme.colors.text}]}>
        {item.title}
      </Text>
      <Text style={[styles.description, {color: theme.colors.text}]}>
        {item.description}
      </Text>
    </View>
  );

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const renderDots = () => (
    <View style={styles.pagination}>
      {onboardingData.map((_, index) => (
        <PaginationDot key={index} isActive={currentIndex === index} />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={onboardingData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        onScroll={handleScroll}
        ref={flatListRef}
      />
      {renderDots()}
      <BigButton
        style={styles.nextButton}
        label={currentIndex === onboardingData.length - 1 ? 'Finish' : 'Next'}
        onPress={handleNext}
      />
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={{color: theme.colors.text}}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
  },
  imageContainer: {
    width: 300,
    height: 352,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 63,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginTop: 18,
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 190,
    alignSelf: 'center',
  },
  nextButton: {
    position: 'absolute',
    bottom: 80,
  },
  skipButton: {
    padding: 15,
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: 16,
  },
});
