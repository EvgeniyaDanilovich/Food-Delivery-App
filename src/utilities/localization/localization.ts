import LocalizedStrings, {
  LocalizedStringsMethods,
} from 'react-native-localization';
import en from './en';
import it from './it';

let strings: LocalizedStringsMethods = new LocalizedStrings({
  en: en,
  it: it,
});

export {strings};
